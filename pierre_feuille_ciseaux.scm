(define nil '())
(define (scissors? hs)
    (equal? 'scissors hs))

(define (paper? hs)
    (equal? 'paper hs))

(define (rock? hs)
    (equal? 'rock hs))

(define (game p1 p2)
    (cond
        ((rock-compare p1 p2) (rock-compare p1 p2))
        ((scissors-compare p1 p2) (scissors-compare p1 p2))
        ((paper-compare p1 p2) (paper-compare p1 p2))
       (else
           nil)))


(define (compare hs1 hs2 t? fn)
   (if (t? hs1)
       (fn hs2)
       (if (t? hs2)
           (fn hs1)
           #f)))

(define (rock-compare hs1 hs2)
    (define (rock-again hs)
        (if (scissors? hs) 'rock hs))
    (compare hs1 hs2 rock? rock-again)
   )


(define (scissors-compare hs1 hs2)
    (define (scissors-again hs)
        (if (paper? hs) 'scissors hs))
   (compare hs1 hs2 scissors? scissors-again))


(define (paper-compare hs1 hs2)
    (define (paper-again hs)
        (if (rock? hs) 'paper hs))

   (compare hs1 hs2 paper? paper-again))
