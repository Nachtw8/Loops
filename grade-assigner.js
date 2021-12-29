
function assignGrade(score) {
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 65) {
    return "D";
  } else {
    return "E";
  }
}

for (n=60; n <= 100; n++ ) {
    console.log('For scoring ' + n  + ' points, you get an ' + assignGrade(n));
};
