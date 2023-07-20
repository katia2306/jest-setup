import { add, division, exponentiation, multiplication, substract } from "../calculator"

test("adds two numbers correctly", () => {
    expect(add(2, 3)).toBe(5)
})

test("adds two numbers correctly", () => {
    expect(add(12, 90)).toBe(102)
})

test("substracts two numbers correctly", () => {
    expect(substract(5, 3)).toBe(2)
})

test("substracts two numbers correctly", () => {
    expect(substract(12, 2)).toBe(10)
})

test("multiplies two numbers correctly", () => {
    expect(multiplication(6, 9)).toBe(54)
})

test("multiplies two numbers correctly", () => {
    expect(multiplication(8, 10)).toBe(80)
})

test("divides two numbers correctly", () => {
    expect(division(12, 2)).toBe(6)
})

test("divides two numbers correctly", () => {
    expect(division(100, 4)).toBe(25)
})

test("exponentiates two numbers correctly", () => {
    expect(exponentiation(12, 2)).toBe(144)
})

test("exponentiates two numbers correctly", () => {
    expect(exponentiation(90, 4)).toBe(65610000)
})
