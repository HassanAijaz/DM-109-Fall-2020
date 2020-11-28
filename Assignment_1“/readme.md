  # Daa Assignement 1

## Group Member
### Hassan Aijaz (61905)
### Ali Afaq (8625)


# 1) Brute force algorithm

# Algorithm
## Input  : The number of Queens (N).
## Output :  The Number of Solutions (Placements) of that very number of Queens’ Problem, according to the rule of the problem.

### Step 1: At first, place a queen in the top row.
### Step 2: Then, place a queen in the next row down
### Step 3: Check, if it is sharing the same column or same diagonal with the first one. If yes, then place the queen in the next available position in that row. Otherwise, move on to the next row to place the next one.
### Step 4: If no position is open in the next row, move back to the previous row and move the queen over to the next available place in its row and the process starts over again and it will continue, until having the proper solution

# Basic idea:
 
The basic idea of the brute force algorithm is to place the queens on all possible positions and check each time if the queens cannot capture each other. If not then it has found a solution. Because of the vast amount of possible positions (NN for a table of size N while each row has 1 queen), this algorithm is not practical even for small table sizes (like N=12).
 
 
 
# Advantages over other methods:
 
Probably none. The brute force algorithm is only mentined to point out the superiority of the other algorithms, as a brute force approach is the last resort, when every other attempt failed.
 
 
 
# Our thoughts:
 
But after "forcing" the algorithm to place only one queen on each row and one on each column the number of posible valid positions decreases to N! (N!=1*2*3....*(N-1)*N). Using this algorithm we can found a solution for larger table sizes compared to the previous method (like N=17).
 
I will not present an actual brute force algorithm here because it is not practical (has exremely low speed due to the enormous amount of resources-calculations required).
