import test from "tape"
import activeLodash from "../"

test("activeLodash", (t) => {
  t.plan(1)
  t.equal(true, activeLodash(), "return true")
})
