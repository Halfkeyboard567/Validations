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
