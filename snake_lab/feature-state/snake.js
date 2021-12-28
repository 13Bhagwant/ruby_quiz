let canvas = document.getElementById('game') // canvas element
let context = canvas.getContext('2d') // canvas movement context
let speed = document.getElementById('speed')
let size = document.getElementById('size')
let appleColor = document.getElementById('apple-color')
let snakeColor = document.getElementById('snake-color')
let bgColor = document.getElementById('bg-color')
let colorButton = document.getElementById('color')

// grid size equals 1/25 of pixel dimension
// 400px / 25 = 16px grid
const grid = 16
let count = 0
let userSpeed = 6

let snake = {

  dx: grid, // allows the snake to move one grid (16px) at a time
  dy: 0, // will keep the snake on the same y axis as it moves along the x axis

  // initial starting position of snake
  x: 160,
  y: 160,

  cells: [], // cells keeps track of the snake body
  maxCells: 1, // the length of the current snake
}

let apple = {

  // initial starting position of apple
  x: 176,
  y: 176,
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

// game loop
function loop() {
  requestAnimationFrame(loop)
  if (++count < userSpeed) return
  count = 0

  context.clearRect(0, 0, canvas.width, canvas.height)
  
  // move the snake 
  snake.x += snake.dx
  snake.y += snake.dy

  // snake colliding with borders
  if (snake.x < 0) {
    snake.x = canvas.width
  } else if (snake.x >= canvas.width) {
    snake.x = 0
  }

  if (snake.y < 0) {
    snake.y = canvas.height
  } else if (snake.y >= canvas.height) {
    snake.y = 0
  }

  // keep track of where the snake has been
  // front of the array is always the head of the snake
  snake.cells.unshift({
    x: snake.x,
    y: snake.y,
  })
  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop()
  }

  // draw apple
  context.fillStyle = appleColor.value
  context.fillRect(apple.x, apple.y, grid - 1, grid - 1)
  
  // draw snake
  context.fillStyle = snakeColor.value
  snake.cells.forEach((cell, index) => {
    context.fillRect(cell.x, cell.y, grid - 1, grid - 1)
    
    // if snake eats the apple
    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++; // add one grid square length to the snake
      
      // move apple to a new random location
      apple.x = getRandomInt(0, 25) * grid;
      apple.y = getRandomInt(0, 25) * grid;
    }

    // check collision with all cells after this one (modified bubble sort)
    for (let i = index + 1; i < snake.cells.length; i++) {
      
      // if snake body is in the same space as any other cell, reset the game
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        snake.x = 160
        snake.y = 160
        snake.dx = grid
        snake.dy = 0
        snake.cells = []
        snake.maxCells = 1
        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
      } 
    }
  })
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37 && snake.dx === 0 || e.which === 65 && snake.dx === 0) { // left arrow or 'a'
    snake.dx = -grid
    snake.dy = 0
  } else if (e.which === 38 && snake.dy === 0 || e.which === 87 && snake.dy === 0) { // up arrow or 'w'
    snake.dx = 0
    snake.dy = -grid
  } else if (e.which === 39 && snake.dx === 0 || e.which === 68 && snake.dx === 0) { // right arrow or 'd'
    snake.dx = grid
    snake.dy = 0
  } else if (e.which === 40 && snake.dy === 0 || e.which === 83 && snake.dy === 0) { // down arrow or 's'
    snake.dx = 0
    snake.dy = grid
  }
})

speed.addEventListener('change', function(e) {
  userSpeed = e.target.value
})

size.addEventListener('change', function(e) {
  canvas.width = e.target.value
  canvas.height = e.target.value
})

colorButton.addEventListener('click', function(e) {
  canvas.style.backgroundColor = bgColor.value
})

requestAnimationFrame(loop)
