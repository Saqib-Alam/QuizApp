const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalscore = document.getElementById('finalscore');

const mostRecentScore = localStorage.getItem('mostRecentScore');
finalscore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log ("clicked the save button!");
    e.preventDefault();
}

username.value.remove.innerText