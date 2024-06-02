// deno-lint-ignore-file
// deno-lint-ignore-file no-unused-vars
import { expect } from "@std/expect";
// deno-lint-ignore no-unused-vars
import { winner } from "./main.ts";

Deno.test("la pierre bat les ciseaux", () => {
  const expected: ReturnType<typeof winner> = "pierre"
  expect(winner("pierre", "ciseaux")).toEqual(expected);
});
