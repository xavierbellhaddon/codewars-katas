// Title: Counting Duplicates

// Link: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

// Solution:

function duplicateCount(text) {
    let count = 0;
    const splitText = text.toUpperCase().split('');
  
    let list = splitText.reduce(function (obj, item) {
      if (!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {});
  
    Object.entries(list).forEach(function (entry) {
      if (entry[1] > 1) {
        count += 1;
      }
    });
  
    return count;
  }