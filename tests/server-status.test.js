const request = require("supertest");
const app = require("../src/app.js");

describe("Test the root path", () => {
  test("Response code should be 200", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});

describe("Test the error path", () => {
  test("Response code should be 404", async () => {
    const response = await request(app).get("/error");
    expect(response.statusCode).toBe(200);
  });
})