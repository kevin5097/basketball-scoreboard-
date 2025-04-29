// 기본 변수 설정
let scoreA = 0;
let scoreB = 0;
let foulsA = 0;
let foulsB = 0;
let quarter = 1;
let gameMinutes = 10; // 예시: 10분 경기
let gameSeconds = 0;
let shotTimeLeft = 24;

let gameClockInterval = null;
let shotClockInterval = null;

// 점수 업데이트 함수
function updateScore(team, points) {
  if (team === 'A') {
    scoreA += points;
    document.getElementById('scoreA').textContent = scoreA;
  } else {
    scoreB += points;
    document.getElementById('scoreB').textContent = scoreB;
  }
}

// 파울 업데이트 함수
function updateFouls(team, points) {
  if (team === 'A') {
    foulsA += points;
    applyFoulDisplay('foulsA', foulsA);
  } else {
    foulsB += points;
    applyFoulDisplay('foulsB', foulsB);
  }
}

// 파울 표시 적용 함수
function applyFoulDisplay(elementId, foulCount) {
  const element = document.getElementById(elementId);
  if (foulCount >= 5) {
    element.textContent = `TEAM FOUL (${foulCount})`;
    element.style.color = 'red';
  } else {
    element.textContent = `Fouls: ${foulCount}`;
    element.style.color = 'lime';
  }
}

// 파울 리셋 함수
function resetFouls() {
  foulsA = 0;
  foulsB = 0;
  applyFoulDisplay('foulsA', foulsA);
  applyFoulDisplay('foulsB', foulsB);
}

// 쿼터 변경 함수
function changeQuarter(change) {
  quarter += change;
  if (quarter < 1) quarter = 1;
  document.getElementById('quarter').textContent = `Q${quarter}`;
}

// 쿼터 리셋 함수
function resetQuarter() {
  quarter = 1;
  document.getElementById('quarter').textContent = `Q${quarter}`;
}

// 슛 클락 시작
function startShotClock() {
  if (shotClockInterval) return; // 이미 돌아가면 무시
  shotClockInterval = setInterval(() => {
    if (shotTimeLeft > 0) {
      shotTimeLeft--;
      document.getElementById('shotClock').textContent = shotTimeLeft;
    } else {
      stopShotClock();
    }
  }, 1000);
}

// 슛 클락 정지
function stopShotClock() {
  clearInterval(shotClockInterval);
  shotClockInterval = null;
}

// 24초 리셋
function resetShotClock() {
  stopShotClock();
  shotTimeLeft = 24;
  document.getElementById('shotClock').textContent = shotTimeLeft;
  startShotClock();
}

// 14초 리셋
function resetShotClock14() {
  stopShotClock();
  shotTimeLeft = 14;
  document.getElementById('shotClock').textContent = shotTimeLeft;
  startShotClock();
}
