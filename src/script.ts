
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const greeting = document.getElementById("greeting");

if (greeting !== null) {
  greeting.textContent = greet("Zainab Yasir");
}

