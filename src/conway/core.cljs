(ns conway.core
  (:require [goog.dom :as dom]))

(defn ^:export greet [n]
  (str "Hello " n))

(defn ^:export alive? [cosmos i j]
  (= (nth (nth cosmos i) j) 1))

(defn ^:export draw [cosmos]
  (let [rows (range (count cosmos))
        cols (range (count (nth cosmos 0)))]
    (doseq [i rows j cols] (if (alive? cosmos i j) (drawsquare j i)))))

(defn ^:export drawsquare [i j]
  (let [canvas (dom/getElement "cosmos")
        context (.getContext canvas "2d")]
    (set! (.-fillStyle context) "red")
    (.fillRect context (* 40 i) (* 40 j) 40 40)))

(def ^:export cosmos [[0 1 0 1 0] [1 1 1 1 0] [0 1 0 1 1]])

(defn get-value-mod [cosmos i j]
  (let [rows (count cosmos)
        cols (count (nth cosmos 0))]
    (nth (nth cosmos (mod i rows)) (mod j cols))))

(defn sum-neighbours [cosmos i j]
  (+ (get-value-mod cosmos (- i 1) (- j 1))
     (get-value-mod cosmos (- i 1) j)
     (get-value-mod cosmos (- i 1) (+ j 1))
     (get-value-mod cosmos i (- j 1))
     (get-value-mod cosmos i (+ j 1))
     (get-value-mod cosmos (+ i 1) (- j 1))
     (get-value-mod cosmos (+ i 1) j)
     (get-value-mod cosmos (+ i 1) (+ j 1))))

(defn destiny [cosmos i j]
  (if (= 1 (get-value-mod cosmos i j))
    (cond
      (< (sum-neighbours cosmos i j) 2) 0
      (> (sum-neighbours cosmos i j) 3) 0
      :else 1)
    (cond
      (= (sum-neighbours cosmos i j) 3) 1
      :else 0)))

(defn ^:export next-cosmos [cosmos]
  cosmos)