// Select the dodger element
const dodger = document.getElementById('dodger');

// Function to move the dodger to the left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 10}px`;
  }
}

// Function to move the dodger to the right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  if (left < 360) { // Assuming the game width is 400px and dodger width is 40px
    dodger.style.left = `${left + 10}px`;
  }
}

// Event listener for keydown events
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (event.key === 'ArrowRight') {
    moveDodgerRight();
  }
});

