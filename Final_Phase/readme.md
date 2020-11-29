 # Algorithm analysis of Burte Force backtracking and Dynamic Programming.

## Dynamic Programming Algorithm
1)  [Initialization] Set QUEUE to {(PI, 1)).
2)  [Square selection] Choose an unexamined square. Let T be the set of four lines containing this square.
3)  [Iteration] For every tuple (S, i) E QUEUE  such that S n T = 0 do the following.
    <ul type = 3>
    <li>[Compaction] If (S U T, j) E QUEUE for some j, replace j by i + j.</li>
    <li>[Creation] Otherwise, add (S U T, i> to QUEUE</li>
    </ul>
4)  [Termination] If an unexamined square remains, go to step 2. Otherwise, terminate.

# Time Complexity of algorithms

## 1)  Dynamic Programming
 
 We have described an 0(f(n>8n) algorithm for the n-queens problem. There is some evidence that the number of solutions to the problem is super-exponential. If this is
 true, then our algorithm is superior to any approach (such as backtracking) that explicitly constructs all solutions to the problem.
 
 ##  2) Backtracking Algoruithm
    
Backtracking is a recursive method which starts a queen at an edge and, ideally, saves the possible attack positions. Then another queen is placed at a safe position…repeat. However, if it is found that N number of queens cannot be placed on that board, it will backtrack and try another safe position. This is over 100 times as fast as brute force and has a time complexity of O(2^n).

##  3) Burte Force

The worst case “brute force” solution for the N-queens puzzle has an O(n^n) time complexity. This means it will look through every position on an NxN board, N times, for N queens. It is by far the slowest and most impractical method. If you refactor and prevent it from checking queens occupying the same row as each other, it will still be brute force, but the possible board states drop from 16,777,216 to a little over 40,000 and has a time complexity of O(n!).

# Backtrackting vs Dynamic programming  vs Burte Force

There are two typical implementations of Dynamic Programming approach: bottom-to-top and top-to-bottom.

Top-to-bottom Dynamic Programming is nothing else than ordinary recursion, enhanced with memorizing the solutions for intermediate sub-problems. When a given sub-problem arises second (third, fourth...) time, it is not solved from scratch, but instead the previously memorized solution is used right away. This technique is known under the name memoization (no 'r' before 'i').

This is actually what your example with Fibonacci sequence is supposed to illustrate. Just use the recursive formula for Fibonacci sequence, but build the table of fib(i) values along the way, and you get a Top-to-bottom DP algorithm for this problem (so that, for example, if you need to calculate fib(5) second time, you get it from the table instead of calculating it again).

In Bottom-to-top Dynamic Programming the approach is also based on storing sub-solutions in memory, but they are solved in a different order (from smaller to bigger), and the resultant general structure of the algorithm is not recursive. LCS algorithm is a classic Bottom-to-top DP example.

Bottom-to-top DP algorithms are usually more efficient, but they are generally harder (and sometimes impossible) to build, since it is not always easy to predict which primitive sub-problems you are going to need to solve the whole original problem, and which path you have to take from small sub-problems to get to the final solution in the most efficient way.

There is no advantage of burte force over other methods. The brute force algorithm is only mentined to point out the superiority of the other algorithms, as a brute force approach is the last resort, when every other attempt failed.
 
