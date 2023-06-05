const { expect } = require("chai");
// const request = require("supertest");

describe("avg", () => {
  describe("#average", () => {
    it("calculates the average", () => {
      const grades = [100, 95, 75];
      const sum = grades.reduce((total, grade) => total + grade, 0);
      const average = sum / grades.length;
      expect(average).equal(90);
    });
  });
});