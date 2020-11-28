  # Daa Assignement 1

## Group Member
### Hassan Aijaz (61905)
### Ali Afaq (8625)


# 1) Brute force algorithm

# Introduction
Brute Force Search, which is also known as Generate and Test, is a very well known algorithm, which examines all possible candidates for the solution and checks, whether each candidate fulfils the problem's criteria or not. A brute force search algorithm for the n queen’s problem will examine all the possible placements of n number of queens on the (n*n) matrix, and, for each placement, check, whether each queen can threaten another queen or not. The basic idea of the brute force search algorithm for n queen’s problem is to place each of the n queens on all possible positions and check regularly, whether the queens threaten each other or not. If this does not occur, then it has reached a proper solution. It is very much simple to implement, and it always finds a solution, if the solution has proper existence. Its complexity grows very quickly, as
increment occurs in the problem size. So, it is mostly used, when the problem size is relatively small. It can also be used, when simplicity is more crucial than speed.

# Algorithm
#####  Input  : The number of Queens (N).
#####  Output :  The Number of Solutions (Placements) of that very number of Queens’ Problem, according to the rule of the problem.

### Step 1: 
<b>At first, place a queen in the top row.</b>

### Step 2: 
<b>Then, place a queen in the next row down</b>

### Step 3: 
<b>Check, if it is sharing the same column or same diagonal with the first one. If yes, then place the queen in the next available position in that row. Otherwise, move on to the next row to place the next one.</b>

### Step 4: 
<b>If no position is open in the next row, move back to the previous row and move the queen over to the next available place in its row and the process starts over again and it will continue, until having the proper solution</b>

# Basic idea:
 
The basic idea of the brute force algorithm is to place the queens on all possible positions and check each time if the queens cannot capture each other. If not then it has found a solution. Because of the vast amount of possible positions (NN for a table of size N while each row has 1 queen), this algorithm is not practical even for small table sizes (like N=12).
 
 
#  Time complexity For brute force:

The worst case “brute force” solution for the N-queens puzzle has an O(n^n) time complexity. This means it will look through every position on an NxN board, N times, for N queens. It is by far the slowest and most impractical method. If you refactor and prevent it from checking queens occupying the same row as each other, it will still be brute force, but the possible board states drop from 16,777,216 to a little over 40,000 and has a time complexity of O(n!).
 
# Advantages over other methods:
 
Probably none. The brute force algorithm is only mentined to point out the superiority of the other algorithms, as a brute force approach is the last resort, when every other attempt failed.
 
 
 
# Our thoughts:
 
But after "forcing" the algorithm to place only one queen on each row and one on each column the number of posible valid positions decreases to N! (N!=1*2*3....*(N-1)*N). Using this algorithm we can found a solution for larger table sizes compared to the other method.
 
  
