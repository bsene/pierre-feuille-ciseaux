// deno-lint-ignore-file
// deno-lint-ignore-file no-unused-vars
// deno-lint-ignore-file
// deno-lint-ignore-file no-unused-vars
export type HandSign = Rock | Paper | Scissors;
type Rock = "pierre";
type Paper = "papier";
type Scissors = "ciseaux";
// deno-lint-ignore no-unused-vars


// deno-lint-ignore no-unused-vars
export function winner(_player1: HandSign, _player2: HandSign): HandSign {
  return "ciseaux"
}
