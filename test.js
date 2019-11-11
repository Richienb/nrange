import test from "ava"
import nRange from "."

test("main", (t) => {
    t.true(nRange())
})

test("numerical comparison", (t) => {
    t.true(nRange(1))
    t.true(nRange(1, 2))
    t.true(nRange(1, 2, 3, 4, 5))
    t.false(nRange(2, 1))
    t.false(nRange(0, -3, -5))
})

test("alphabetic comparison", (t) => {
    t.true(nRange("a", "b", "c"))
    t.false(nRange("c", "b", "a"))
})
