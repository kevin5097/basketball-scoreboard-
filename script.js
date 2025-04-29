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
// 쿼터 리셋
function resetQuarter() {
  quarter = 1;
  document.getElementById('quarter').textContent = `Q${quarter}`;
}

// 슛 클락 24초 리셋
function resetShotClock() {
  shotTimeLeft = 24;
  document.getElementById('shotClock').textContent = shotTimeLeft;
}

// 슛 클락 14초 리셋
function resetShotClock14() {
  shotTimeLeft = 14;
  document.getElementById('shotClock').textContent = shotTimeLeft;
}

// 파울 업데이트 + 5개 이상이면 붉은색
function updateFouls(team, points) {
  if (team === 'A') {
    foulsA += points;
    if (foulsA >= 5) {
      document.getElementById('foulsA').textContent = `TEAM FOUL`;
      document.getElementById('foulsA').style.color = 'red';
    } else {
      document.getElementById('foulsA').textContent = `Fouls: ${foulsA}`;
      document.getElementById('foulsA').style.color = 'lime';
    }
  } else {
    foulsB += points;
    if (foulsB >= 5) {
      document.getElementById('foulsB').textContent = `TEAM FOUL`;
      document.getElementById('foulsB').style.color = 'red';
    } else {
      document.getElementById('foulsB').textContent = `Fouls: ${foulsB}`;
      document.getElementById('foulsB').style.color = 'lime';
    }
  }
}
