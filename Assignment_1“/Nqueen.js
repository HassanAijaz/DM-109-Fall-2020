//Implementation For brute force Algorithm

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
