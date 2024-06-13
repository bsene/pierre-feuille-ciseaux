package com.zenika.formation

class Rock: HandSign() {
    override fun compare(other: HandSign): Any {
        if(other is Rock) return -1
        if(other is Paper) return other
        return this
    }
}