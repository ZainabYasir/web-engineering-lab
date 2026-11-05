
import { createServer } from "node:http";
import { readFileSync } from "node:fs";
import { page, time } from "./page.mjs";

let cachedPage = "";
let lastBuilt = 0;

const server = createServer(async (req, res) => {
    const url = req.url;

    res.setHeader("Content-Type", "text/html; charset=utf-8");

    // 1. Client Side Rendering (CSR)
    if (url === "/csr") {
        res.end(
            page(
                "CSR",
                "<p id='content'>Loading...</p>",
                "document.getElementById('content').textContent = 'Rendered in browser at ' + new Date().toLocaleTimeString();"
            )
        );
    }

    // 2. Server Side Rendering (SSR)
    else if (url === "/ssr") {
        res.end(
            page(
                "SSR",
                `<p>Generated at: ${time()}</p>`
            )
        );
    }

    // 3. Static Site Generation (SSG)
    else if (url === "/ssg") {
        try {
            const html = readFileSync(
                new URL("./dist/ssg.html", import.meta.url),
                "utf8"
            );

            res.end(html);
        } catch {
            res.statusCode = 500;
            res.end("<h1>SSG file not found. Run build-static.mjs first.</h1>");
        }
    }

    // 4. Incremental Static Regeneration (ISR)
    else if (url === "/isr") {
        if (Date.now() - lastBuilt > 5000) {
            cachedPage = page(
                "ISR",
                `<p>Generated at: ${time()}</p>`
            );

            lastBuilt = Date.now();
        }

        res.end(cachedPage);
    }

    // 5. Streaming
    else if (url === "/stream") {
        res.write(
            "<!DOCTYPE html><html><head><title>Streaming</title></head><body>"
        );

        res.write("<h1>Streaming Rendering</h1>");
        res.write("<p>First part loaded immediately.</p>");

        await new Promise(resolve => setTimeout(resolve, 1500));

        res.write("<p>Second part loaded after 1.5 seconds.</p>");

        res.end("</body></html>");
    }

    // Home page
    else if (url === "/") {
        res.end(
            page(
                "Rendering Demo",
                `<ul>
                    <li><a href="/csr">CSR</a></li>
                    <li><a href="/ssr">SSR</a></li>
                    <li><a href="/ssg">SSG</a></li>
                    <li><a href="/isr">ISR</a></li>
                    <li><a href="/stream">Streaming</a></li>
                </ul>`
            )
        );
    }

    // Invalid URL
    else {
        res.statusCode = 404;
        res.end("<h1>404 - Page Not Found</h1>");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
