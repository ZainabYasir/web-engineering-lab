## Task 10: JavaScript Event Loop

**Expected Output:**

1 start
4 end
3 promise
2 timeout

**Explanation:**

JavaScript executes synchronous statements first. That is why `1 start` and `4 end` are displayed first.

The Promise `.then()` callback is a microtask, so `3 promise` is displayed next. The callback scheduled by `setTimeout()` runs afterward, so `2 timeout` is displayed last.

