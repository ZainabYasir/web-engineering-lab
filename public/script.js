function greet(name) {
    return `Hello, ${name}!`;
}

if (typeof document !== "undefined") {
    document.getElementById("greeting").textContent = greet("World");
}


