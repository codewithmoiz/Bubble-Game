var clutter = '';

function creatingBubbles() {
    for (var i = 1; i <= 60; i++) {
        clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }
    document.querySelector('.bottom').innerHTML = clutter;
}

var countDown = 60;

function settingTimer() {
    var timerInterval = setInterval(function () {
        countDown--;
        if (countDown >= 0) {
            document.querySelector('.timer').textContent = countDown;
        } else {
            clearInterval(timerInterval);
            document.querySelector('.bottom').innerHTML = `<h1 id="over">Game over</h1>`
        }
    }, 1000);
}

function hitVal() {
    return Math.floor(Math.random() * 10);
}

function abc() {
    var hit = hitVal();
    document.querySelector('.hit').textContent = hit;
    
    document.querySelector('.bottom').addEventListener('click', function (dets) {
        if (dets.target.textContent == hit) {
            scoreNum+=10;
            document.querySelector('.score').textContent = scoreNum;
            hit = hitVal(); // Update the hit value
            document.querySelector('.hit').textContent = hit; // Update hit displayed
        }
    })
}

var scoreNum = 0;
abc();
creatingBubbles();
settingTimer();
