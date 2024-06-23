(load "assert.scm")
(load "pierre_feuille_ciseaux.scm")



(test-case "rock blunt scissors"
    (assert-symbol= 'rock (game 'rock 'scissors))
    (assert-symbol= 'rock (game 'scissors 'rock)))

(test-case "scissors cut paper"
    (assert-symbol= 'scissors (game 'scissors 'paper))
    (assert-symbol= 'scissors (game 'paper 'scissors))
    )

(test-case "paper wrap rock"
    (assert-symbol= 'paper (game 'paper 'rock))
    (assert-symbol= 'paper (game 'rock 'paper)))


(test-case "draw cases"

    (assert-symbol= 'rock (game 'rock 'rock))
    (assert-symbol= 'paper (game 'paper 'paper))
    (assert-symbol= 'scissors (game 'scissors 'scissors))
    )
