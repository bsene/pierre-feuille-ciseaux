package com.zenika.formation

class Scissor: HandSign() {
    override fun compare(other: HandSign): Any {
        if(other is Scissor) return false
        if(other is Paper) return this
        return other
    }
}