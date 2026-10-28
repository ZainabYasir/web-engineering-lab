"use strict";
function greet(name) {
    return `Hello, ${name}!`;
}
const greeting = document.getElementById("greeting");
if (greeting !== null) {
    greeting.textContent = greet("Zainab Yasir");
}
