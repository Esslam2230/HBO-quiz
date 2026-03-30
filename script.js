const quizQuestions = [
  {
    question: 'Hou je van fruit?',
    feedback: {
      Ja: 'Top! Dan hou je misschien ook van frisse, creatieve ideeën.',
      Nee: 'Geen probleem, smaken verschillen. Dat maakt keuzes juist interessant.',
      Anders: 'Leuk! Een eigen antwoord voelt meteen persoonlijker.'
    }
  },
  {
    question: 'Werk je liever met een laptop dan met papier?',
    feedback: {
      Ja: 'Dat klinkt al lekker digitaal en past goed bij de ICT-sfeer.',
      Nee: 'Dan is een mix van creatief denken en digitaal werken misschien beter.',
      Anders: 'Flexibel denken is juist handig als je later een richting kiest.'
    }
  },
  {
    question: 'Lijkt het je leuk om dingen te maken die mensen online gebruiken?',
    feedback: {
      Ja: 'Nice! Dat past goed bij websites, apps en interactieve tools.',
      Nee: 'Misschien liggen data, onderzoek of support je later beter.',
      Anders: 'Dan kan een brede oriëntatie-quiz straks extra handig zijn.'
    }
  }
];

const menuToggle = document.querySelector('.menu-toggle');
const siteHeader = document.querySelector('.site-header');

if (menuToggle && siteHeader) {
  menuToggle.addEventListener('click', () => {
    siteHeader.classList.toggle('menu-open');
  });
}

const page = document.body.dataset.page;

if (page === 'quiz') {
  const questionNumber = document.getElementById('question-number');
  const questionTotal = document.getElementById('question-total');
  const questionText = document.getElementById('question-text');
  const progressIndicator = document.getElementById('progress-indicator');
  const feedback = document.getElementById('quiz-feedback');
  const restartButton = document.getElementById('restart-button');
  const answerButtons = Array.from(document.querySelectorAll('.answer-button'));

  let currentQuestionIndex = 0;

  const renderQuestion = () => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionNumber.textContent = String(currentQuestionIndex + 1);
    questionTotal.textContent = String(quizQuestions.length);
    questionText.textContent = currentQuestion.question;
    progressIndicator.style.width = `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`;
    feedback.textContent = 'Kies een antwoord om verder te gaan.';
    answerButtons.forEach((button) => button.classList.remove('is-selected'));
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      currentQuestionIndex += 1;
      window.setTimeout(renderQuestion, 260);
      return;
    }

    questionText.textContent = 'Demo klaar! Later kan hier jouw echte ICT-advies komen.';
    questionNumber.textContent = String(quizQuestions.length);
    progressIndicator.style.width = '100%';
    feedback.textContent = 'Je hebt de testquiz afgerond. Gebruik opnieuw starten om nog eens te kijken.';
    answerButtons.forEach((button) => button.classList.remove('is-selected'));
  };

  answerButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const currentQuestion = quizQuestions[currentQuestionIndex];
      const selectedAnswer = button.dataset.answer;
      answerButtons.forEach((answerButton) => answerButton.classList.remove('is-selected'));
      button.classList.add('is-selected');
      feedback.textContent = currentQuestion.feedback[selectedAnswer] || 'Leuke keuze!';
      window.setTimeout(goToNextQuestion, 900);
    });
  });

  restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    renderQuestion();
  });

  renderQuestion();
}


const cards = document.querySelectorAll(".card");

let order = [0,1,2,3,4];

function updatePositions() {
  cards.forEach((card, i) => {
    card.classList.remove("pos-0","pos-1","pos-2","pos-3","pos-4");
    card.classList.add("pos-" + order[i]);
  });
}

function rotateCards() {
  order.push(order.shift()); // draai array
  updatePositions();
}

updatePositions();
setInterval(rotateCards, 2500);



const text = "Kies een ICT-richting die bij jouw energie past.";
const el = document.querySelector(".title");

let i = 0;
let isDeleting = false;

function typeLoop() {
  if (!isDeleting) {
    // typen
    el.innerHTML = text.substring(0, i + 1);
    i++;

    if (i === text.length) {
      isDeleting = true;
      setTimeout(typeLoop, 2000); // wacht even
      return;
    }
  } else {
    // verwijderen
    el.innerHTML = text.substring(0, i - 1);
    i--;

    if (i === 0) {
      isDeleting = false;
    }
  }

  setTimeout(typeLoop, isDeleting ? 20 : 40);
}

typeLoop();



