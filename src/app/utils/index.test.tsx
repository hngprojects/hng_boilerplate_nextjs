import { describe, it, expect } from "vitest";
import { handlerContainsNumber, handleContainsUpperCase } from "./";

describe("Validation Functions", () => {
  describe("handlerContainsNumber", () => {
    it("should return true when the string contains a number", () => {
      expect(handlerContainsNumber("abc123")).toBe(true);
    });

    it("should return false when the string does not contain a number", () => {
      expect(handlerContainsNumber("abcdef")).toBe(false);
    });

    it("should return true when the string contains only numbers", () => {
      expect(handlerContainsNumber("123456")).toBe(true);
    });

    it("should return false when the string is empty", () => {
      expect(handlerContainsNumber("")).toBe(false);
    });
  });

  describe("handleContainsUpperCase", () => {
    it("should return true when the string contains an uppercase letter", () => {
      expect(handleContainsUpperCase("Abc")).toBe(true);
    });

    it("should return false when the string does not contain an uppercase letter", () => {
      expect(handleContainsUpperCase("abc")).toBe(false);
    });

    it("should return true when the string contains only uppercase letters", () => {
      expect(handleContainsUpperCase("ABC")).toBe(true);
    });

    it("should return false when the string is empty", () => {
      expect(handleContainsUpperCase("")).toBe(false);
    });
  });
});
