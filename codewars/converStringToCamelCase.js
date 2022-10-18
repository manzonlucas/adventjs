function toCamelCase(str) {
  let strArray;

  if (str === '') {
    return '';
  }

  if (str.indexOf('-') !== -1) {
    strArray = str.split('-')
  } else {
    strArray = str.split('_')
  }

  let finalString = strArray[0];

  for (let i = 1; i < strArray.length; i++) {
    finalString += capitalize(strArray[i]);
  }

  return finalString;
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

console.log(toCamelCase('test-pedro-test'))
console.log(toCamelCase('a'))
