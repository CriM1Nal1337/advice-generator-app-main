const adviceIdElement = document.getElementById('advice-id');
const adviceTextElement = document.getElementById('advice-text');
const diceButton = document.querySelector('.dice');
const adviceUrl = 'https://api.adviceslip.com/advice';
function fetchAdvice() {
  fetch(adviceUrl)
    .then(response => response.json())
    .then(data => {
      const advice = data.slip.advice;
      const adviceId = data.slip.id;
      adviceIdElement.textContent = adviceId;
      adviceTextElement.textContent = advice;
    })
    .catch(error => {
      console.error('Error fetching advice:', error);
    });
}

diceButton.addEventListener('click', fetchAdvice);

fetchAdvice();