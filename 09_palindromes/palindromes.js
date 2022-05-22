const palindromes = function (a) { 
   let filtered = [...a].filter(isLetter);
   
   for (let i = 0; i < filtered.length; i++) {
       const start = filtered[i];
       const end = filtered[filtered.length - 1 - i];
       if (start.toLowerCase() !=  end.toLowerCase()) {
           return false;
       }
   }
   return true;
};

const isLetter = (a) => {
    return a.toUpperCase() != a.toLowerCase();
}

// Do not edit below this line
module.exports = palindromes;
