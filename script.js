document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const startScreen = document.getElementById('start-screen');
    const quizContainer = document.getElementById('quiz-container');
    const startBtns = document.querySelectorAll('.start-btn');
    const randomBtn = document.querySelector('.random-btn');
    
    const questionEl = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');
    const explanationContainer = document.getElementById('explanation-container');
    const explanationEl = document.getElementById('explanation');
    const nextBtn = document.getElementById('next-btn');
    const questionProgressEl = document.getElementById('question-progress');
    const scoreEl = document.getElementById('score');
    const finalMessageEl = document.getElementById('final-message');
    const quizBody = document.querySelector('.quiz-body');
    const restartBtn = document.getElementById('restart-btn'); 
    const endQuizBtn = document.getElementById('endQuiz-btn');

    // State
    let score = 0;
    let currentDeck = [];
    let currentIndex = 0;
    let answerSelected = false;
    let randomMode = false;
    let randomCount = 0;

    const domainWeights = {
         "General Geology": 0.40,             // 40%
         "Petrology & Mineralogy": 0.15,      // 15%
         "Structural Geology": 0.10,          // 10%
         "Volcanology & Seismology": 0.10,    // 10%
         "Hydrogeology & Engineering Geology": 0.10, // 10%
         "Economic Geology": 0.05,            // 5%
         "Geomorphology": 0.05,               // 5%
         "Stratigraphy & Paleontology": 0.05  // 5%
    };

    function createWeightedDeck(totalQuestions) {
        let deck = [];
        const questionsByDomain = questions.reduce((acc, q) => {
            acc[q.domain] = acc[q.domain] || [];
            acc[q.domain].push(q);
            return acc;
        }, {});

        for (const domain in questionsByDomain) {
            questionsByDomain[domain].sort(() => Math.random() - 0.5);
        }

        let totalAdded = 0;
        for (const domain in domainWeights) {
            let count = Math.round(totalQuestions * domainWeights[domain]);
            if (totalAdded + count > totalQuestions) {
                count = totalQuestions - totalAdded;
            }
            const domainQuestions = questionsByDomain[domain] || [];
            const questionsToAdd = domainQuestions.slice(0, count);
            deck = deck.concat(questionsToAdd);
            totalAdded += questionsToAdd.length;
            if (totalAdded >= totalQuestions) break;
        }

        // Fill up if not enough
        while (deck.length < totalQuestions && questions.length > deck.length) {
            let randomQuestion = questions[Math.floor(Math.random() * questions.length)];
            if (!deck.find(q => q.question === randomQuestion.question)) {
                deck.push(randomQuestion);
            }
        }

        deck = deck.slice(0, totalQuestions);
        deck.sort(() => Math.random() - 0.5);
        return deck;
    }

    function showRandomQuestion() {
        score = 0;
        currentDeck = [];
        currentIndex = 0;
        answerSelected = false;
        randomMode = true;
        randomCount = 0;
        questionProgressEl.textContent = `Question ${currentIndex + 1}`;
        scoreEl.textContent = score;
        startScreen.style.display = 'none';
        quizContainer.style.display = 'block';
        endQuizBtn.style.display = 'block';

        currentDeck = createWeightedDeck(1);
        showQuestion();
    }

    function showQuestion() {
        answerSelected = false;
        explanationContainer.style.display = 'none';
        nextBtn.style.display = 'none';
        optionsContainer.innerHTML = '';

        if (currentIndex >= currentDeck.length) {
            showFinalScore();
            return;
        }

        const card = currentDeck[currentIndex];
        questionProgressEl.textContent = randomMode
            ? `Question ${randomCount + 1}`
            : `Question ${currentIndex + 1} / ${currentDeck.length}`;

        questionEl.textContent = card.question;

        // Shuffle options to make it more challenging
        const shuffledOptions = [...card.options].sort(() => Math.random() - 0.5);

        shuffledOptions.forEach(optionText => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.textContent = optionText;
            optionDiv.addEventListener('click', () => handleOptionClick(optionDiv, optionText, card.correctAnswer));
            optionsContainer.appendChild(optionDiv);
        });
    }

    function handleOptionClick(selectedDiv, selectedText, correctAnswer) {
        if (answerSelected) return;
        answerSelected = true;

        const allOptions = optionsContainer.querySelectorAll('.option');
        
        selectedDiv.classList.add('selected');

        if (selectedText === correctAnswer) {
            score++;
            scoreEl.textContent = score;
            selectedDiv.classList.add('correct');
        } else {
            selectedDiv.classList.add('incorrect');
            allOptions.forEach(opt => {
                if (opt.textContent === correctAnswer) {
                    opt.classList.add('correct');
                }
            });
        }
        
        explanationEl.innerHTML = currentDeck[currentIndex].explanation;
        explanationContainer.style.display = 'block';
        nextBtn.style.display = 'block';
    }

    function showFinalScore() {
        quizBody.style.display = 'none';
        explanationContainer.style.display = 'none';
        nextBtn.style.display = 'none';
        endQuizBtn.style.display = 'none';
        let totalQuestions = randomMode ? randomCount : currentDeck.length; 
        const finalScore = (score / totalQuestions) * 100;
        finalMessageEl.textContent = `Quiz Complete! Your final score is ${finalScore.toFixed(1)}% (${score}/${totalQuestions}).`;
        finalMessageEl.style.display = 'block';
        restartBtn.style.display = 'block'; 
        randomMode = false;
    }

    function restartQuiz() {
        // Reset state
        score = 0;
        currentDeck = [];
        currentIndex = 0;
        answerSelected = false;
        randomMode = false;
        randomCount = 0;

        // Hide quiz and final message, show start screen
        quizContainer.style.display = 'none';
        finalMessageEl.style.display = 'none';
        restartBtn.style.display = 'none';
        quizBody.style.display = 'block';
        startScreen.style.display = 'block';
    }

    restartBtn.addEventListener('click', restartQuiz);

    function startQuiz(questionCount) {
        currentDeck = createWeightedDeck(questionCount);
        if (currentDeck.length < questionCount) {
            alert(`Warning: Not enough unique questions available. Starting quiz with ${currentDeck.length} questions.`);
        }
        scoreEl.textContent = score;

        startScreen.style.display = 'none';
        quizContainer.style.display = 'block';
        
        if (currentDeck.length > 0) {
            showQuestion();
        } else {
             questionEl.textContent = "Could not load questions.";
        }
    }

    nextBtn.addEventListener('click', () => {
        if (randomMode) {
            randomCount++;
            scoreEl.textContent = score;
            currentDeck = createWeightedDeck(1);
            showQuestion();
        } else {
            currentIndex++;
            showQuestion();
        }
    });

    startBtns.forEach(button => {
        button.addEventListener('click', () => {
            const questionCount = parseInt(button.dataset.count, 10);
            startQuiz(questionCount);
        });
    });

    randomBtn.addEventListener('click', showRandomQuestion);
    endQuizBtn.addEventListener('click', () => {
        showFinalScore();
        endQuizBtn.style.display = 'none';
    });
});