import com.zenika.formation.*
import kotlin.test.Test
import kotlin.test.assertEquals

class GameTest {

    @Test
    fun testRockCrushScissor() {
        val rock = Rock()
        val scissor = Scissor()
        assertEquals(GameResult.Rock, game(rock,scissor))
        assertEquals(GameResult.Rock, game(scissor,rock))
    }


    @Test
    fun test2RockEquality() {
        val rock = Rock()
        val anotherRock = Rock()

        assertEquals(GameResult.Draw, game(rock,anotherRock))
        assertEquals(GameResult.Draw, game(anotherRock,rock))

    }

    @Test
    fun testPaperWrapRock() {
        val rock = Rock()
        val paper = Paper()
        assertEquals(GameResult.Paper, game(paper, rock))
        assertEquals(GameResult.Paper, game(rock, paper))
    }

    @Test
    fun test2PaperEquality() {
        val paper = Paper()
        val anotherPaper = Paper()
        assertEquals(GameResult.Draw, game(paper, anotherPaper))
        assertEquals(GameResult.Draw, game(anotherPaper, paper))
    }

    @Test
    fun testScissorCutPaper() {
        val scissor = Scissor()
        val paper = Paper()

        assertEquals(GameResult.Scissor, game(scissor, paper))
        assertEquals(GameResult.Scissor, game(paper, scissor))
    }


    @Test
    fun test2ScissorEquality() {
        val scissor = Scissor()
        val anotherScissor = Scissor()
        assertEquals(GameResult.Draw, game(scissor, anotherScissor))
        assertEquals(GameResult.Draw, game(anotherScissor, scissor))
    }

}