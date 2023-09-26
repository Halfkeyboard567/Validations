document.addEventListener("DOMContentLoaded", function () {
    let fieldCounter = 1;

// Function to add additional fields (school and transcription) when clicking on the button    
    document.getElementById('addMore').addEventListener('click', function() {
        fieldCounter++;

        // Create HTML elements for new school and trascription
        const newSchoolDiv = document.createElement('div'); 
        newSchoolDiv.classList.add('col-sm-5');
        newSchoolDiv.innerHTML = `
            <label for="school${fieldCounter}">University</label>
            <input type="text" class="form-control" id="another_schooll${fieldCounter}">
            `;

        const newTranscriptDiv = document.createElement('div');
        newTranscriptDiv.classList.add('col-sm-3');
        newTranscriptDiv.innerHTML = `
            <label for="transcript${fieldCounter}">Upload the Credit Transcript</label>
            <input type="file" class="form-control" id="another_transcript${fieldCounter}">
            `;
 
        // Add the new fields to the form
        document.getElementById('additionalFields').appendChild(newSchoolDiv);
        document.getElementById('additionalFields').appendChild(newTranscriptDiv);
    });
});


// Function to select roles after pressing the login button
function redirectToRoleSelection() {
    // Redirects you to the role selection page.
    window.location.href = "select-role.html";
}
/*
function showSignUp() {
    document.getElementById('Transcript-Home').classList.add('hidden');
    document.getElementById('Transcript-Login').classList.add('hidden');
    document.getElementById('ForgotPassword').classList.add('hidden');
    document.getElementById('Transcript-NewStudentApplication').classList.remove('hidden');
  }

  function showSignIn() {
  document.getElementById('Transcript-Home').classList.add('hidden');
    document.getElementById('Transcript-Login').classList.remove('hidden');
    document.getElementById('ForgotPassword').classList.add('hidden');
    document.getElementById('Transcript-NewStudentApplication').classList.add('hidden');
  }

  function showHome() {
      document.getElementById('Transcript-Login').classList.add('hidden');
    document.getElementById('Transcript-NewStudentApplication').classList.add('hidden');
    document.getElementById('ForgotPassword').classList.add('hidden');
    document.getElementById('Transcript-Home').classList.remove('hidden');
  }
 */

  function showForgotPassword() {
      document.getElementById('Transcript-Login').classList.add('hidden');
      document.getElementById('ForgotPassword').classList.remove('hidden');
  }
 

  function showSignUp() {
    document.getElementById('Transcript-Home').classList.add('hidden');

    document.getElementById('Transcript-NewStudentApplication').classList.remove('hidden');
  }



  function showHome() {
 
    document.getElementById('Transcript-NewStudentApplication').classList.add('hidden');
 
    document.getElementById('Transcript-Home').classList.remove('hidden');
  }
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

document.addEventListener("DOMContentLoaded", function () {
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");
    
    forgotPasswordForm.addEventListener("submit", function (event) {
       event.preventDefault(); // Prevent the form from submitting normally
       // Get the user's email
       const email = document.getElementById("email").value;
       // You should add validation and backend logic for sending a password reset email here.
       // For this example, we'll simply display a confirmation message.
       alert("A password reset link has been sent to your email.");
   });
});