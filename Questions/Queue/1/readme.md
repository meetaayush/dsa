# Reverse first `k` elements of queue

## Input
`Queue` = [1,2,3,4,5,6,7,8,9,10]    `k` = 5

## Output
`result` = [5,4,3,2,1,6,7,8,9,10]

### Time Complexity
Overall, `k` elements are dequeued, pushed to the stack, popped from it, and then enqueued. Additionally, `n-k` elements are dequeued and enqueued to the queue. On the assumption that each push, pop, enqueue or dequeue operation takes constant time, the time complexity of this function is `O(n)` as all `n` elements have to be processed with constant-time​ operations.