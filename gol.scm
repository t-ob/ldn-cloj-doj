(define cosmos
  (make-vector [])
  )

(random 2)

(define sum-neighbours-indices
  (lambda (i j n)
    (list (list (modulo (- i 1) n)
                (modulo i n)
                (modulo (+ i 1) n))
          (list (modulo (- j 1) n)
                (modulo j n)
                (modulo (+ j 1) n)))))

(sum-neighbours-indices 0 0 3)
(mapfor + sum-neighbours-indices)

(define cosmos
  (vector (vector 0 0 1)
          (vector 1 1 0)
          (vector 1 0 1)))

(define cell
  (lambda (i j)
    (vector-ref (vector-ref cosmos i) j)))

(cell 0 0)

(map (lambda (row) row) (vector->list cosmos))




;; 0-0 0-1 0-2
;;
;;



