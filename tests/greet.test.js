const test = require("node:test");
const assert = require("node:assert");
const { greet } = require("../public/script.js");

test("greet returns the correct greeting", () => {
  assert.strictEqual(greet("World"), "Hello, World!");
});
