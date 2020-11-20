// Title: Stop gninnipS My sdroW!

// Link: https://www.codewars.com/kata/5264d2b162488dc400000001

// Solution: 

function spinWords(str) {
    return str
      .split(' ')
      .map((el) => {
        if (el.length >= 5) {
          return el.split('').reverse().join('');
        } else {
          return el;
        }
      })
      .join(' ');
  }