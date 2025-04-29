let scoreA = 0;
let scoreB = 0;
let foulsA = 0;
let foulsB = 0;
let quarter = 1;
let timerInterval;
let shotClockInterval;
let timeLeft = 600; // 10분 (600초)
let shotTimeLeft = 24;

function updateScore(team, points) {
  if (team === 'A') {
    scoreA += points;
    if (scoreA < 0) scoreA = 0;
    document.getElementById('scoreA').textContent = scoreA;
  } else {
    scoreB += points;
    if (scoreB < 0) scoreB = 0;
    document.getElementById('scoreB').textContent = scoreB;
  }
}

function updateFouls(team, points) {
  if (team === 'A') {
    foulsA += points;
    document.getElementById('foulsA').textContent = `Fouls: ${foulsA}`;
  } else {
    foulsB += points;
    document.getElementById('foulsB').textContent = `Fouls: ${foulsB}`;
  }
}

function changeQuarter(amount) {
  quarter += amount;
  document.getElementById('quarter').textContent = `Q${quarter}`;
}

function changeTeamName(team) {
  const inputId = team === 'A' ? 'teamAInput' : 'teamBInput';
  const nameId = team === 'A' ? 'teamAName' : 'teamBName';
  const newName = document.getElementById(inputId).value;
  if (newName) {
    document.getElementById(nameId).textContent = newName;
  }
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 600; // 다시 10분
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');
  document.getElementById('gameTimer').textContent = `${minutes}:${seconds}`;
}

function resetShotClock() {
  shotTimeLeft = 24;
  document.getElementById('shotClock').textContent = shotTimeLeft;
}
