  # Daa Phase # 01

## Group Member
### Hassan Aijaz (61905)
### Ali Afaq (8625)


# Recursive backtracking algorithm

# Introduction
In backtracking, we start with one possible move out of many available moves. We then try to solve the problem.If we are able to solve the prob­lem with the selected move then we will print the solution. Else we will backtrack and select some other move and try to solve it.

If none of the moves works out we claim that there is no solution for the problem.

# Algorithm
#####  Input  : The number of Queens (N).
#####  Output :  The Number of Solutions (Placements) of that very number of Queens’ Problem, according to the rule of the problem.

### Step 1: 
<b>Start in the leftmost column.</b>

### Step 2: 
<b>If all queens are placed
  return true</b>

### Step 3: 
<b>Try all rows in the current column. 
   Do following for every tried row.</b>
   <ol>
  <li><b>If the queen can be placed safely in this row 
       then mark this [row, column] as part of the 
       solution and recursively check if placing
       queen here leads to a solution.</b></li>
  <li><b>If placing the queen in [row, column] leads to
       a solution then return true.</b></li>
  <li><b>If placing queen doesn't lead to a solution then
       unmark this [row, column] (Backtrack) and go to 
       step (a) to try other rows.</b></li>
  </ol>

### Step 4: 
<b>If all rows have been tried and nothing worked,
   return false to trigger backtracking.</b>

# Basic idea:
 
An N Queens backtracking algorithm is much more efficient by any brute force approach. The idea is to place one queen on one edge and then continue by placing the next queen on the first valid position (in the next row / column) and so on. When no more queens can be placed the algorithm has either found a solution (if all queens are placed) or it needs to remove the processed queen and move the previous one to the next valid position. When a queen has been placed on the last valid position in a row / column and needs to be replaced it must be removed and the previous one must be moved to the next valid position.

# Algorithm Details

One important detail of the backtracking algorithm is the function that saves the attacked positions (marks the invalid locations for the rest of the queens). This is the part of the algorithm that mostly determines its speed and efficiency. You can see the major difference of the two methods mentioned in the algorithm results - speed section.

<ul>
<li>One novice approach is to mark queens positions on a 2 dimentional matrix (array in programming). Zero should represent no threat (valid spot) whereas every other number of that matrix means invalid location. When the algorithm must place a queen the diagonals, rows / columns and lines it threatens should take the number of the line of that queen (unless they already are not zero because another queen also threatens them). When the algorithm must remove a queen of the line k all the numbers of the matrix that are equal to k should become zero (numbers equal to k are those that are threatened just by the k queen so when this queen is removed they should become zero (no threat)). You can download this version of the algorithm here.
</li>

<li>Another method is to save just the row / column and the diagonals that each queen occupies. The rows  / columns can be saved on a boolean one dimentional array / matrix with true meaning occupied row / column and false meaning free row / column. The diagonals can be also saved on two boolean one dimentional array / matrix and accessed with x - y and x + y numbers (where x is the number of the row / column of the queen and y is the number of the line). The upper left queen has x = 1 and y = 1 and the lower right queen has x = N and y = N for a table size of N). The diagonals accesed with x - y are those with positive slope whereas x + y accessed the negative slope diagonals. The second method along with other minor optimizations yields a 20x times speed up over the first (method). You can download this version of the algorithm here.
</li>

<li>The last and probably the best way of marking queens positions is using bitfields which will not be expained in this site. However the speed penalty of using the second method over the third is less than the penalty of using the first over the second method.
</li>
  </ul>

  Also the backtracking algorithm time complexity is exponential. 

 
#  Time complexity For backtracking algorithm:

Backtracking is a recursive method which starts a queen at an edge and, ideally, saves the possible attack positions. Then another queen is placed at a safe position…repeat. However, if it is found that N number of queens cannot be placed on that board, it will backtrack and try another safe position. This is over 100 times as fast as brute force and has a time complexity of O(2^n).
 
# Advantages over other methods:
 
The major advantage of the backtracking algorithm is the abillity to find and count all the possible solutions rather than just one while offering decent speed. In fact this is the reason it is so widely used. Also one can easily produce a parallel version of the backtracking algorithm increasing speed several times just by starting multiple threads with different starting positions of the first queens.
 
 
# Our thoughts:

The backtracking algorithm can be further optimised by using bitfields. You can study Jeff Somers's solution to the N Queens problem for further details. Also the backtracking algorithm can be easilly implemented on a GPU or a Multicore CPU. However it cannot find any solutions in a logical amount of time (some days) for numbers greater to 60 - 100 due to the exponential increase of the time needed as N (table size) grows.

  
