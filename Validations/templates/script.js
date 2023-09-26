document.addEventListener("DOMContentLoaded", function () {
    let fieldCounter = 1;

// Function to add additional fields (school and transcription) when clicking on the button    
    document.getElementById('addMore').addEventListener('click', function() {
        fieldCounter++;

        // Create HTML elements for new school and trascription
        const newSchoolDiv = document.createElement('div'); 
        newSchoolDiv.classList.add('mb-3');
        newSchoolDiv.innerHTML = `
            <label for="school${fieldCounter}">University</label>
            <input type="text" class="form-control" id="another_schooll${fieldCounter}">
            `;

        const newTranscriptDiv = document.createElement('div');
        newTranscriptDiv.classList.add('mb-3');
        newTranscriptDiv.innerHTML = `
            <label for="transcript${fieldCounter}">Upload the Transcript</label>
            <input type="file" class="form-control" id="another_transcript${fieldCounter}">
            `;
 
        // Add the new fields to the form
        document.getElementById('additionalFields').appendChild(newSchoolDiv);
        document.getElementById('additionalFields').appendChild(newTranscriptDiv);
    });
});

// Log_In
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("Transcript-Login");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const loginID = document.getElementById("loginID").value;
        const loginPassword = document.getElementById("loginPassword").value;

        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ loginID, loginPassword }),
        });

        if (response.status === 200) {
            window.location.href = "/welcome";
        } else {
            errorMessage.textContent = "Invalid username or password. Please try again.";
        }
    });
});