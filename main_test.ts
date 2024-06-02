import { assertEquals } from "jsr:@std/assert";
import { type HandSign, winner } from "./main.ts";

Deno.test("la pierre bat les ciseaux", () => {
  assertEquals<HandSign>(winner("pierre", "ciseaux"), "pierre");
});
