// deno-lint-ignore-file
// deno-lint-ignore-file no-unused-vars
// deno-lint-ignore-file
// deno-lint-ignore-file no-unused-vars
export type HandSign = Rock | Paper | Scissors;
type Rock = "pierre";
type Paper = "feuille";
type Scissors = "ciseaux";
// deno-lint-ignore no-unused-vars


// deno-lint-ignore no-unused-vars
export function winner(player1: HandSign, player2: HandSign): HandSign {
  if (player1 === "ciseaux" && player2 === "pierre" || player1 === "pierre" && player2 === "ciseaux") return "pierre"
  if (player1 === "ciseaux" && player2 === "feuille" || player1 === "feuille" && player2 === "ciseaux") return "ciseaux"
  if (player1 === "feuille" && player2 === "pierre" || player1 === "pierre" && player2 === "feuille") return "feuille"
  return "pierre"
}
