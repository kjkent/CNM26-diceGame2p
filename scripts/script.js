const startButton = document.getElementById("startButton");
const splash = document.getElementById("splash");
const game = document.getElementById("game");
let p1DiceImg = document.getElementById("p1DiceImg");
let p2DiceImg = document.getElementById("p2DiceImg");
const p1RollButton = document.getElementById("p1RollButton");
const p2RollButton = document.getElementById("p2RollButton");
let p1Score = 0;
let p2Score = 0;
let player = 1;
let p1TotalScore = document.getElementById("p1TotalScore");
let p2TotalScore = document.getElementById("p2TotalScore");
const gameOver = document.getElementById("gameOver");
const restartButton = document.getElementById("restartButton");

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

startButton.addEventListener("click", () => {
    splash.style.display = "none";
    game.style.display = "flex";
    p1RollButton.disabled = false;
    p2RollButton.disabled = true;
})

const diceGame = async () => {
    roll = Math.floor(Math.random() * 6) + 1
    
    if (player == 1) {

        if (roll == 1) {
            p1RollButton.disabled = true;
            p1RollButton.textContent = "YOU LOST";
            p1DiceImg.src = "images/dice1.png";
            await sleep(5000);
            game.style.display = "none";
            gameOver.style.display = "flex";
        } else {
            p1DiceImg.src = `images/dice${roll}.png`;
            p1Score += roll;
            p1TotalScore.textContent = p1Score;
        }
        player = 2;
        p1RollButton.disabled = true;
        p2RollButton.disabled = false;
    } else {
        if (roll == 1) {
            p2.rollButton.disabled = true;
            p2RollButton.textContent = "YOU LOST";
            p2DiceImg.src = "images/dice1.png";
            await sleep(5000);
            game.style.display = "none";
            gameOver.style.display = "flex";
        } else {
            p2DiceImg.src = `images/dice${roll}.png`;
            p2Score += roll;
            p2TotalScore.textContent = p2Score;
        }
        player = 1;
        p2RollButton.disabled = true;
        p1RollButton.disabled = false;
    }
    
    if (p1Score >= 20) {
        p1RollButton.disabled = true;
        p2RollButton.disabled = true;
        p1RollButton.textContent = "YOU WON";
        await sleep(5000);
        game.style.display = "none";
        gameOver.style.display = "flex";
    } else if (p2Score >= 20) {
        p1RollButton.disabled = true;
        p2RollButton.disabled = true;
        p2RollButton.textContent = "YOU WON";
        await sleep(5000);
        game.style.display = "none";
        gameOver.style.display = "flex";
    }

}

p1RollButton.addEventListener("click", diceGame);
p2RollButton.addEventListener("click", diceGame);


restartButton.addEventListener("click", () => {
    gameOver.style.display = "none";
    splash.style.display = "flex";
    p1Score = 0;
    p2Score = 0;
    player = 1;
    p1TotalScore.textContent = score;
    p2TotalScore.textContent = score;
    p1RollButton.disabled = false;
    p2RollButton.disabled = true;
    p1RollButton.textContent = "ROLL!"
    p2RollButton.textContent = "ROLL!"
    p1DiceImg.src = "images/dice.png";
    p2DiceImg.src = "images/dice.png";
})