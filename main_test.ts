import { assertEquals } from "jsr:@std/assert";
import { add } from "./main.ts";

Deno.test("la pierre bat les ciseaux",() => {
  assertEquals(add(2, 3), 5);
});
