;;;
;;; assert-scm - Minimalist xUnit test framework for Scheme R5RS, Gambit extension.
;;; https://github.com/codecop/assert-scm
;;; Copyright (c) 2015, Peter Kofler, BSD 3-Clause License
;;;
(include "assert-r5rs.scm")

(define (-error->string ex)
    (cond ((null? ex)                     "")
          ((string? ex)                   ex)
          ((symbol? ex)                   (symbol->string ex))
          ((list? ex)                     (string-append " (" (apply string-append (map -error->string ex)) ")"))
          ;; Gambit specific code
          ((error-exception? ex)          (-error->string (error-exception-message ex)))
          ((unbound-global-exception? ex) (-error->string (unbound-global-exception-variable ex))) ; variable name
          ((type-exception? ex)           (string-append "expected " (-error->string (type-exception-type-id ex)))) ; type name
          (else                           (pp ex)
                                          "<unknown exception type>")))

(define (-run-with-exception-handler handler body)
    ;; Gambit specific code
    (with-exception-catcher handler body))

(define (assert-raise expected-ex body)
    (define (ex-handler ex)
        (let ((expected-message (-error->string expected-ex))
              (actual-message   (-error->string ex)))
            (check (-make-string-message "raise " -error->string expected-ex ex)
                   (string=? expected-message actual-message))))
    (define (ex-body)
        (body)
        (error "no raise in body"))
    (lambda ()
        (-run-with-exception-handler ex-handler ex-body)))

(define-macro (ignored-test-case name . assertions)
    `(begin
        (-test-case-name ,name)
        (-test-case-ignored)))
