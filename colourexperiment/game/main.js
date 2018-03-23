
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function isCellEqual(cellA, cellB) {
  return cellA.x === cellB.x && cellA.y === cellB.y;
}


function createCanvasGrid(parentNode, width, height, size = 10) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  canvas.width = width * size;
  canvas.height = height * size;
  canvas.setAttribute('tabindex', '0');

  parentNode.appendChild(canvas);

  return {
    width: () => width,
    height: () => height,
    keydown: fn => canvas.addEventListener('keydown', fn),
    fill: (cell, fillStyle = '#fff') => {
      context.fillStyle = fillStyle;
      context.fillRect(cell.x * size, cell.y * size, size, size);
    },
    clear: () => {
      context.fillStyle = '#000';
      context.fillRect(0, 0, canvas.width, canvas.height);
    },
    write: (cell, text, style = {}) => {
      context.textAlign = style.textAlign || 'left';
      context.font = style.font || '48px sans-serif';
      context.fillStyle = style.fillStyle || '#fff';
      context.fillText(text, cell.x * size, cell.y * size);
    }
  };
}

function createLoop(mainFn) {
  let last = Date.now();

  (function loop() {
    const now = Date.now();

    mainFn(now - last);
    requestAnimationFrame(loop);
    last = now;
  })();
}


function createSnakeGame(parentNode) {
  const drawInterval = 1000 / 15; // 1000 ms / 15 fps
  const grid = createCanvasGrid(parentNode, 40, 25, 15);
  const drawSnake = () => snake.map(cell => grid.fill(cell));
  const drawFood = () => grid.fill(foodCell, 'red');

  let snake = [{x: 2, y: 0}, {x: 1, y: 0}, {x: 0, y: 0}];
  let isDead = false;
  let speedX = 1;
  let speedY = 0;
  let timeToNextDraw = 0;
  let foodCell = getRandomEmptyCell();

  function reset() {
    isDead = false;
    snake = [{x: 2, y: 0}, {x: 1, y: 0}, {x: 0, y: 0}];
    speedX = 1;
    speedY = 0;
  }

  function drawGameOver() {
    const center = {
      x: grid.width() / 2,
      y: grid.height() / 2 - 2
    };

    const centerSub = {
      x: grid.width() / 2,
      y: grid.height() / 2 + 2
    };

    grid.write(center, 'Game over', { textAlign: 'center' });
    grid.write(centerSub, 'Press space to continue...', {
      textAlign: 'center',
      font: 'bold 14px sans-serif'
    });
  }

  function drawScore() {
    const score = (snake.length - 3) * 10;
    const bottomRight = {
      x: grid.width() - 1,
      y: grid.height() - 1
    };

    grid.write(bottomRight, 'Score ' + score, {
      textAlign: 'right',
      font: 'bold 12px sans-serif',
      fillStyle: 'lightblue'
    });
  }

  function getRandomEmptyCell() {
    let randomCell;

    if (snake.length >= grid.width() * grid.height()) {
      throw 'No more empty cells!';
    }

    do {
      randomCell = {
        x: getRandomInt(0, grid.width()),
        y: getRandomInt(0, grid.height())
      };
    } while (snake.some(cell => isCellEqual(cell, randomCell)));

    return randomCell;
  }

  function checkIfDead() {
    const head = snake[0];

    return snake.slice(1).some(cell => isCellEqual(head, cell));
  }

  function setSnakeSpeed(x, y) {
    // Ignore if trying to go back on self
    if (speedY === 0 && y !== 0 || speedX === 0 && x !== 0) {
      speedY = y;
      speedX = x;
    }
  }

  function moveSnake() {
    const currentHead = snake[0];
    const head = {
      x: currentHead.x + speedX,
      y: currentHead.y + speedY
    };

    if (head.x >= grid.width()) {
      head.x = 0;
    } else if (head.x < 0) {
      head.x = grid.width() - 1;
    }

    if (head.y >= grid.height()) {
      head.y = 0;
    } else if (head.y < 0) {
      head.y = grid.height() - 1;
    }

    snake.unshift(head);

    if (isCellEqual(foodCell, head)) {
      foodCell = getRandomEmptyCell();
    } else {
      snake.pop();
    }
  }


  function main(dt) {
    timeToNextDraw -= dt;

    if (timeToNextDraw <= 0 && !isDead) {
      timeToNextDraw = drawInterval;
      isDead = checkIfDead();

      grid.clear();

      if (!isDead) {
        moveSnake();

        drawSnake();
        drawFood();
      } else {
        drawGameOver();
      }

      drawScore();
    }
  }


  grid.keydown(e => {
    const keyCodes = {
      // Up
      40: () => setSnakeSpeed(0, 1),
      // Right
      39: () => setSnakeSpeed(1, 0),
      // Up
      38: () => setSnakeSpeed(0, -1),
      // Left
      37: () => setSnakeSpeed(-1, 0),
      // Space
      32: () => isDead && reset(),
    }

    if (e.keyCode in keyCodes) {
      keyCodes[e.keyCode]();
      e.preventDefault();
    }
  });

  createLoop(main);
}





createSnakeGame(document.body);
