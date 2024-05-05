function generateSquares() {
    var start = 1; // Start number for the range
    var end = 10; // End number for the range

    var squaresContainer = document.getElementById("squares-container");
    squaresContainer.innerHTML = ""; // Clear previous content

    while (start <= 100) { // Generate squares for numbers up to 100
        var squaresHTML = "<h2>Squares of " + start + " to " + end + ":</h2>";
        for (var i = start; i <= end; i++) {
            squaresHTML += "<p>" + i + " * " + i + " = " + (i * i) + "</p>";
        }
        squaresContainer.innerHTML += squaresHTML;

        // Update start and end for the next range
        start += 10;
        end += 10;
    }
}
