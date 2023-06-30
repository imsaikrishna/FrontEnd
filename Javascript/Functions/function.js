
function xyz() {
    var currentBalance = 3000;
    var depositedAmount = Number(prompt("Enter your deposit amount : "));
    
    console.log(typeof currentBalance)
    console.log(typeof depositedAmount) 
    // typeof

   var updatedBalance = currentBalance + depositedAmount;
   console.log("updated balance is : " , updatedBalance);
   return updatedBalance;
}


var getAmount = xyz() - 15;

console.log("New updated balance : ", getAmount );



