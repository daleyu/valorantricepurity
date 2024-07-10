const questions = [
    "Have you ever played Valorant?",
    "Have you ever played a Valorant Ten Man?",
    "Have you ever played a Valorant PUG?",
];

function createQuestions() {
    const form = document.getElementById('purityTest');
    questions.forEach((question, index) => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'q' + (index + 1);
        checkbox.value = 'yes';
        label.appendChild(document.createTextNode(`${index + 1}. `));
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(' ' + question));
        form.appendChild(label);
    });
}

function calculateScore() {
    const form = document.getElementById('purityTest');
    const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
    const score = 100 - checkboxes.length;
    
    // Hide the questions page
    document.getElementById('questionsPage').style.display = 'none';
    
    // Show the results page
    const resultsPage = document.getElementById('resultsPage');
    resultsPage.style.display = 'block';
    
    // Display the score
    const scoreDisplay = document.getElementById('scoreDisplay');
    scoreDisplay.textContent = score;
}

createQuestions();