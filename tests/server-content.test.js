const request = require("supertest");
const app = require("../src/app.js");

describe("Test the root path", () => {
  test("Response should contain base html", async () => {
    const response = await request(app).get("/");
    console.log(response);
    expect(response.text).toBe(
      `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/index.css">
    <title>Hello World!!</title>
</head>
<body>
    <div class="container mx-auto px-4 my-4">
        <h1 class="text-4xl text-center font-semibold my-4">Hello World!!</h1>
        <p class="text-center text-lg">Current datetime is: <span class="date-container font-semibold"></span></p>
    </div>
    <script src="/js/index.js"></script>
</body>
</html>`
    );
  });
});

describe("Test the test path", () => {
  test("Response body should be Hello World!", async () => {
    const response = await request(app).get("/test");
    expect(response.text).toBe("Hello World!");
  });
});
