(load "assert.scm")
(load "pierre_feuille_ciseaux.scm")



(test-case "rock blunt scissors"
    (assert-symbol= 'rock (game 'rock 'scissors)))
