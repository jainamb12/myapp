const test = require("node:test");
const assert = require("node:assert");
const request = require("supertest");
const app = require("../app");

test("GET / returns greeting", async () => {
  const res = await request(app).get("/");
  assert.strictEqual(res.status, 200);
  assert.strictEqual(res.body.message, "Hello from my Node app!");
});

test("GET /health returns ok", async () => {
  const res = await request(app).get("/health");
  assert.strictEqual(res.status, 200);
  assert.strictEqual(res.body.status, "ok");
});
