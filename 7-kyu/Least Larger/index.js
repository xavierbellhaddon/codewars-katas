// Title: Least Larger

// Link: https://www.codewars.com/kata/5f8341f6d030dc002a69d7e4 

// Solution:

function leastLarger(a, i) {
    const sorted = a.slice().sort((a, b) => a - b);
    const index = a[i];
    let result = -1;
  
    for (let x = 0; x < sorted.length; x++) {
      if (sorted[x] > index) {
        result = a.indexOf(sorted[x]);
        return result;
      }
    }
  
    return result;
  }