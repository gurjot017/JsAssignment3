document.addEventListener("DOMContentLoaded", function () {
    
    // Home Page Logic - Handle form submission
    const submitBtn = document.getElementById("submitBtn");
    if (submitBtn) { 
        submitBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent form from reloading (if inside a form)

            // Get form values
            const firstName = document.getElementById("firstName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();
            const email = document.getElementById("email").value.trim();
            const address = document.getElementById("address").value.trim();
            const city = document.getElementById("city").value.trim();
            const province = document.getElementById("province").value.trim();
            const membership = document.querySelector('input[name="membership"]:checked').value;

            // Validate fields
            if (!firstName || !lastName || !email || !address || !city || !province) {
                alert("Please fill in all fields.");
                return;
            }

            // Display results
            const output = document.getElementById("output");
            output.style.display = "block"; // Show output section
            output.innerHTML = `
                <h3>Form Submission Result:</h3>
                <p><strong>Full Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Address:</strong> ${address}</p>
                <p><strong>City:</strong> ${city}</p>
                <p><strong>Province:</strong> ${province}</p>
                <p><strong>Membership:</strong> ${membership}</p>
            `;
        });
    }

    // Excel Page Logic - Handle number calculations
    const calculateBtn = document.getElementById("calculateBtn");
    if (calculateBtn) {
        calculateBtn.addEventListener("click", function () {
            const numberStr = document.getElementById("numbers").value.trim();

            if (!numberStr) {
                alert("Please enter some numbers!");
                return;
            }

            // Convert string to an array of numbers
            const numberArr = numberStr.split(" ").map(Number).filter(num => !isNaN(num));

            if (numberArr.length === 0) {
                alert("Please enter valid numbers!");
                return;
            }

            let result;
            if (document.getElementById("sum").checked) {
                result = numberArr.reduce((acc, num) => acc + num, 0);
            } else if (document.getElementById("avg").checked) {
                result = numberArr.reduce((acc, num) => acc + num, 0) / numberArr.length;
            } else if (document.getElementById("max").checked) {
                result = Math.max(...numberArr);
            } else if (document.getElementById("min").checked) {
                result = Math.min(...numberArr);
            }

            // Display result
            document.getElementById("result").innerText = `Result: ${result}`;
        });
    }
});
