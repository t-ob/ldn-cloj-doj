(def cosmos [[0 1] [1 0]])
(nth cosmos 0)
(count cosmos)


(alive? cosmos 0 1)

(if (alive? cosmos 1 1) 1 0)

(def ^:export cosmos [[0 1 0 1 0] [1 1 1 1 0] [0 1 0 1 1]])
cosmos

(defn get-value-mod [cosmos i j]
  (let [rows (count cosmos)
        cols (count (nth cosmos 0))]
    (nth (nth cosmos (mod i rows)) (mod j cols))))

(get-value-mod cosmos 10 1)

(defn sum-neighbours [cosmos i j]
  (+ (get-value-mod cosmos (- i 1) (- j 1))
     (get-value-mod cosmos (- i 1) j)
     (get-value-mod cosmos (- i 1) (+ j 1))
     (get-value-mod cosmos i (- j 1))
     (get-value-mod cosmos i (+ j 1))
     (get-value-mod cosmos (+ i 1) (- j 1))
     (get-value-mod cosmos (+ i 1) j)
     (get-value-mod cosmos (+ i 1) (+ j 1))))

(sum-neighbours cosmos 1 1)

(defn destiny [cosmos i j]
  (if (= 1 (get-value-mod cosmos i j))
    (cond
      (< (sum-neighbours cosmos i j) 2) 0
      (> (sum-neighbours cosmos i j) 3) 0
      :else 1)
    (cond
      (= (sum-neighbours cosmos i j) 3) 1
      :else 0)))

cosmos

