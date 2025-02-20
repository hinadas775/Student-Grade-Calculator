const getResult = () => {
  let math = parseFloat(document.getElementById('math').value);
  let phy = parseFloat(document.getElementById('phy').value);
  let chem = parseFloat(document.getElementById('chem').value);
  let cs = parseFloat(document.getElementById('cs').value);
  let ss = parseFloat(document.getElementById('ss').value);

  let total = math + phy + chem + cs+ ss;
  document.getElementById('total').innerHTML = total.toString();

  // Calculate percentage assuming max total marks is 500 (100 marks each for 5 subjects)
  let maxTotal = 500;
  let percentage = (total / maxTotal) * 100;
  document.getElementById('percentage').innerHTML = percentage.toFixed(2) +'%'; // Display percentage in HTML
  
  let grade;
  let message;

  if (total >= 300) {
    grade = 'A';
    message = 'Congratulations! You have passed with Grade A.';
  } else if (total >= 225) {
    grade = 'B';
    message = 'Congratulations! You have passed with Grade B.';
  } else if (total >= 150) {
    grade = 'C';
    message = 'Congratulations! You have passed with Grade C.';
  } else {
    grade = 'F';
    message = 'Sorry, you have failed. Better luck next time!';
  }

  document.getElementById('grade').innerHTML = grade;
  document.getElementById('message').innerHTML = message;
  alert(message); // Display pass/fail message using prompt
}


