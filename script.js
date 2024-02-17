var clutter = '';

function creatingBubbles() {
    for (var i = 1; i <= 60; i++) {
        clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }
    document.querySelector('.bottom').innerHTML = clutter;
}

var countDown = 60;

function creatingBubbles() {
    var bubbleContainer = document.querySelector('.bottom');
    bubbleContainer.innerHTML = ''; // Clear existing bubbles
    
    for (var i = 1; i <= 60; i++) {
        var bubbleValue = Math.floor(Math.random() * 10);
        var bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.textContent = bubbleValue;
        bubbleContainer.appendChild(bubble);
    }
}

function settingTimer() {
    var timerInterval = setInterval(function () {
        countDown--;
        if (countDown >= 0) {
            document.querySelector('.timer').textContent = countDown;
        } else {
            clearInterval(timerInterval);
            document.querySelector('.bottom').innerHTML = `<h1 id="over">Game over</h1>`;
        }
    }, 1000);
}

function hitVal() {
    return Math.floor(Math.random() * 10);
}

function checkClick() {
    var hit = hitVal();
    document.querySelector('.hit').textContent = hit;
    
    document.querySelector('.bottom').addEventListener('click', function (dets) {
        if (dets.target.classList.contains('bubble') && dets.target.textContent == hit) {
            scoreNum += 10;
            document.querySelector('.score').textContent = scoreNum;
            hit = hitVal();
            document.querySelector('.hit').textContent = hit;
            
            var bubbles = document.querySelectorAll('.bubble');
            bubbles.forEach(function (bubble) {
                bubble.textContent = Math.floor(Math.random() * 10);
            });
        }
    });
}

var scoreNum = 0;
checkClick();
creatingBubbles();
settingTimer();

