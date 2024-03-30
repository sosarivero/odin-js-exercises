const fibonacci = function (num) {
  num = parseInt(num);

  if (num < 0) return "OOPS";
  if (num <= 1) return num;

  return fibonacci(num - 2) + fibonacci(num - 1);
};

// Do not edit below this line
module.exports = fibonacci;
