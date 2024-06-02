// deno-lint-ignore-file
import { describe, test } from "https://deno.land/std@0.224.0/testing/bdd.ts";
// deno-lint-ignore-file ban-unused-ignore
// deno-lint-ignore-file no-unused-vars
import { expect } from "@std/expect";
// deno-lint-ignore ban-unused-ignore
// deno-lint-ignore no-unused-vars
import { type HandSign, winner } from "./main.ts";

describe("Pierre-Feuille-Ciseaux", () => {
  describe("Classique", () => {
    test("la pierre bat les ciseaux", () => {
      const expected: ReturnType<typeof winner> = "pierre";
      expect(winner("pierre", "ciseaux")).toBe(expected);
      expect(winner("ciseaux", "pierre")).toBe(expected);
    });

    test("les ciseaux battent la feuille", () => {
      const expected: ReturnType<typeof winner> = "ciseaux";
      expect(winner("ciseaux", "feuille")).toBe(expected);
      expect(winner("feuille", "ciseaux")).toBe(expected);
    });
    test("la feuille bat la pierre", () => {
      const expected: ReturnType<typeof winner> = "feuille";
      expect(winner("feuille", "pierre")).toBe(expected);
      expect(winner("pierre", "feuille")).toBe(expected);
    });

    test("egalité ", () => {
      let expected: HandSign = "ciseaux";
      expect(winner("ciseaux", "ciseaux"), expected);
      expected = "feuille"
      expect(winner("feuille", "feuille"), expected);
      expected = "pierre"
      expect(winner("pierre", "pierre"), expected);
    });
  });
});
