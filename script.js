const titleScreen = document.getElementById('titleScreen');
const gameScreen = document.getElementById('gameScreen');
const startBtn = document.getElementById('startBtn');
const player = document.getElementById('player');
const dialogueBox = document.getElementById('dialogueBox');
const dialogueText = document.getElementById('dialogueText');

let playerX = 50; // Starting X position
const speed = 10;
const gameWidth = 600;

// Start Game from Title Screen
startBtn.addEventListener('click', () => {
  titleScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');
});

// Character Movement Controls
document.addEventListener('keydown', (e) => {
  if (gameScreen.classList.contains('hidden')) return;

  // Move Left (ArrowLeft or 'a')
  if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
    playerX = Math.max(0, playerX - speed);
  }

  // Move Right (ArrowRight or 'd')
  if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
    playerX = Math.min(gameWidth - 32, playerX + speed);
  }

  // Update Player Position in DOM
  player.style.left = playerX + 'px';

  // Check collision/interaction with Jessica (located at X: 480)
  checkJessicaInteraction();
});

function checkJessicaInteraction() {
  // If player gets close to Jessica (around X: 440 to 520)
  if (playerX >= 430) {
    dialogueBox.classList.remove('hidden');
    dialogueText.textContent = "Jessica: 'Hi there! Looking for an entry-level tech pro with great problem-solving skills? You found her!'";
  } else {
    dialogueBox.classList.add('hidden');
  }
}
