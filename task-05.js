const checkForSpam = function (message) {
  //  console.log(message.includes('sale'));
  //  message.toLowerCase();
  //  console.log(message.toLowerCase().includes('spam'))
  //  return
  return message.toLowerCase().includes('sale') ||
    message.toLowerCase().includes('spam')
    ? true
    : false;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
