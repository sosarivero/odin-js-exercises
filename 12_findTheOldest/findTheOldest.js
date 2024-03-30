const findTheOldest = function (peopleObj) {
  return peopleObj.reduce((a, b) => {
    let aAge = getYearOfDeath(a.yearOfDeath) - a.yearOfBirth;
    let bAge = getYearOfDeath(b.yearOfDeath) - b.yearOfBirth;

    return aAge > bAge ? a : b;
  });
};

function getYearOfDeath(num) {
  if (num === undefined) {
    let dateObj = new Date();
    return dateObj.getFullYear();
  } else {
    return num;
  }
};

// Do not edit below this line
module.exports = findTheOldest;
