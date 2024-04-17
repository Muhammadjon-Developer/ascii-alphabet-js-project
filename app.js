let item = prompt('Enter an english letter or any character: ')

function getAsci(i) {
  let result = i.charCodeAt(0);
  return result;
}

console.log(getAsci(item))