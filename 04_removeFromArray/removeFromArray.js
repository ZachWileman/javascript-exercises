const removeFromArray = function (array, ...removeValues) {
  return array.filter((element) => !removeValues.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
