const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("respond 200", (done) => {
    request(app).get("/")
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect(200, done);
  })
});