const User = require("../models/users");
const bcrypt = require("bcrypt");

// Mock the bcrypt.hash and bcrypt.compare functions
jest.mock("bcrypt", () => ({
    hash: jest.fn(),
    compare: jest.fn(),
}));

describe("User Model", () => {
    describe("test", () => {
        it("should return 'hitting model'", () => {
            const result = User.test();
            expect(result).toEqual("hitting model");
        });
    });
});