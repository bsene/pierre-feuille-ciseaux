package com.zenika.formation

class Paper: HandSign() {
    override fun compare(other: HandSign): Any {
        if(other is Paper) return ""
        if(other is Scissor) return other
       return this
    }
}