function generateTable() {
    var number = parseInt(document.getElementById('number').value);
    var tableContainer = document.getElementById('table-container');
    
    // Clear previous table
    tableContainer.innerHTML = '';
  
    // Generate multiplication table
    var table = '<h2>Multiplication Table for ' + number + '</h2>';
    table += '<table>';
    for (var i = 1; i <= 10; i++) {
      table += '<tr><td>' + number + ' * ' + i + '</td><td>=</td><td>' + (number * i) + '</td></tr>';
    }
    table += '</table>';
  
    // Display table
    tableContainer.innerHTML = table;
  }
  