
export const page = (title, body, script = "") => `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>${title}</title>
</head>
<body>
    <h1>${title}</h1>
    ${body}
    ${script ? `<script>${script}</script>` : ""}
</body>
</html>
`;

export const time = () => new Date().toLocaleTimeString();
