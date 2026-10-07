const marks = [78, 45, 90, 50, 0, 100, 33];

function generateReport(marks, passMark = 50) {
 
  if (!Array.isArray(marks) || marks.length === 0) {
    return null;
  }

  if (!Number.isInteger(passMark) || passMark < 0 || passMark > 100) {
    return null;
  }

  for (let i = 0; i < marks.length; i++) {
    if (!Number.isInteger(marks[i]) || marks[i] < 0 || marks[i] > 100) {
      return null;
    }
  }


  const marksCopy = marks.slice();
  let total = 0;
  let highest = marksCopy[0];
  let lowest = marksCopy[0];

  for (let i = 0; i < marksCopy.length; i++) {
    total += marksCopy[i];
    if (marksCopy[i] > highest) highest = marksCopy[i];
    if (marksCopy[i] < lowest) lowest = marksCopy[i];
  }

  const average = total / marksCopy.length;

 
  let passCount = 0;
  let failCount = 0;

  for (let i = 0; i < marksCopy.length; i++) {
    if (marksCopy[i] >= passMark) {
      passCount++;
    } else {
      failCount++;
    }
  }

  let grade;
  switch (true) {
    case average >= 80:
      grade = "A";
      break;
    case average >= 60:
      grade = "B";
      break;
    case average >= 50:
      grade = "C";
      break;
    default:
      grade = "D";
  }

  return {
    total,
    average,
    highest,
    lowest,
    passCount,
    failCount,
    grade,
  };
}

console.log(generateReport(marks, 50));
console.log(marks); 

console.log(generateReport("not an array", 50)); 
console.log(generateReport([], 50));
console.log(generateReport([78, "45", 90], 50)); 
console.log(generateReport([78, 45.5, 90], 50)); 