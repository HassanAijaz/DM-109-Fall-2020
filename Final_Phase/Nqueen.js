
//Dynamic Programming

function queenPuzzle(rows, columns) {
    if (rows <= 0) {
        return [[]];
    } else {
        return addQueen(rows - 1, columns);
    }
}
 
function addQueen(newRow, columns) {
    var newSolutions = [];
    var prev = queenPuzzle(newRow, columns);
    console.log("prev---> ",prev)
    console.log("row, col", newRow,columns)
    for (var i = 0; i < prev.length; i++) {
        var solution = prev[i];
        for (var newColumn = 0; newColumn < columns; newColumn++) {
            if (!hasConflict(newRow, newColumn, solution))
                newSolutions.push(solution.concat([newColumn]))
        }
    }
    return newSolutions;
}
 
function hasConflict(newRow, newColumn, solution) {
    for (var i = 0; i < newRow; i++) {
        if (solution[i]     == newColumn          ||
            solution[i] + i == newColumn + newRow || 
            solution[i] - i == newColumn - newRow) {
                return true;
        }
    }
    return false;
}
 
console.log(queenPuzzle(8,8));


// Using bruteforce  

var cols=[],
arr1=[],
arr2=[],
arr3=[],
a={},
b={},
count=0,
star=[],
rep=0,
n=8;


     
              for(i=1;i<=n;i++)
           {
                cols.push(i)
           }  
                var str = cols.join('');
                //console.log(str);

  
function getAllPermutations(string) 
  {
                var results = [];
  
             if (string.length === 1) 
           {
                results.push(string);
                return results;
           }

             for (var i = 0; i < string.length; i++) 
           {
     
                var firstChar = string[i];
                var charsLeft = string.substring(0, i) + string.substring(i + 1);
                var innerPermutations = getAllPermutations(charsLeft);
             for (var j = 0; j < innerPermutations.length; j++) 
           {
                results.push(firstChar + innerPermutations[j]);
           }
           }
                return results;
  }

      
                var vec=getAllPermutations(str);
  
function num(val)
{

                return Number(val);

}


             for(var j of vec)
           {

   
 
                arr3.push(j.split('').map(num));

           }
      
             for(var k of arr3)
     {         
            
             for (i=0;i<cols.length;i++)
           {

  
               
               arr1.push(k[i]+i);
               arr2.push(k[i]-i);
            
           }
     

               a= new Set(arr1);                            
               b= new Set(arr2);
               //console.log(arr1);
 
            if (n==(a.size) && n==(b.size))
          {
               console.log(k.join(''));
               count = count + 1;
               console.log("Graphical Representation :"+"\n");
     

     
            for (var p=0;p<n;p++)
          {
            for(var m=0;m<n;m++)
          {    
               var hash='#';
               star[m]=hash;
                 
          }
               rep = k[p]-1;
               star[rep]="Q";
               console.log(star);
         
               star=[];
          }
               console.log("\n");

          }
     
  
               arr1=[];
               arr2=[];
     
     }

              console.log("Number of Solutions :"+" "+count);
			  
			  
	// Using Backtracking
	var iterations = 0

var print_board = function (columns) {
  var n = columns.length, row = 0, col = 0
  while (row < n) {
    while (col < n) {
      process.stdout.write(columns[row] === col ? 'Q ' : '# ')
      col++
    }

    process.stdout.write('\n')
    col = 0
    row++
  }
}

var has_conflict = function (columns) {
  var len = columns.length, last = columns[len - 1], previous = len - 2

  while (previous >= 0) {
    if (columns[previous] === last) return true
    if (last - (len - 1) === columns[previous] - previous) return true
    if (last + (len - 1) === columns[previous] + previous) return true
    previous--
  }

  return false
}

var place_next_queen = function (total, queens, columns) {
  if (queens === 0) return columns
  columns = columns || []

  for (var column = 0; column < total; column++) {
    columns.push(column)
    iterations++
    if (!has_conflict(columns) &&
        place_next_queen(total, queens - 1, columns)) {
      return columns
    }
    columns.pop(column)
  }

  return null
}

print_board(place_next_queen(28, 28))
console.log('\niterations: ', iterations)
	