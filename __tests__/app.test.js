const app = require('../api/app');
const seed = require('../db/seeds/seed');
const request = require('supertest');
const db = require('../db/connection');
const testData = require('../db/data/test-data/index');

beforeEach(() => {
    return seed(testData);
});

afterAll(() => {
    return db.end();
});

describe("/api/genres", () => {
    describe("getGenres", () => {
        test("200: responds with an array on a key of genres", async () => {
            const req = await request(app).get("/api/genres").expect(200);
            expect(Array.isArray(req.body.genres)).toBe(true)
        })
        test("200: each element in the responding array contains the correct key-value pairs", async () => {
            const req = await request(app).get("/api/genres").expect(200);
            expect(req.body.genres.length).toBeGreaterThan(0);
            req.body.genres.forEach((genre) => {
                expect(genre).toMatchObject({
                    slug: expect.any(String),
                    description: expect.any(String)
                })
            })
        })
    })
})