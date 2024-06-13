package com.zenika.formation

fun game(player1: HandSign, player2: HandSign): GameResult = asGameResult(player1.compare(player2))


fun asGameResult(data:Any): GameResult = when(data) {
     is Rock -> GameResult.Rock
     is Paper -> GameResult.Paper
     is Scissor -> GameResult.Scissor
     else -> GameResult.Draw
 }

enum class GameResult {
    Rock,Paper,Scissor, Draw
}
