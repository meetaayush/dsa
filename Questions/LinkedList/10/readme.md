# Reorder list

You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → L(n - 1) → L2 → L(n - 2) → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.


## Input 1
1 -> 2 -> 3 -> 4

## Output 1
1 -> 4 -> 2 -> 3

## Input 2
1 -> 2 -> 3 -> 4 -> 5

## Output 2
1 -> 5 -> 2 -> 4 -> 3