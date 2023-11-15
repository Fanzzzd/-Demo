var lights = [[true, true], [true, true]];  // 初始状态改为所有灯都亮着

function toggleLights(x, y) {
    lights[x][y] = !lights[x][y];
    toggleAdjacentLights(x, y);

    updateBoard();
    checkWin();
}

function toggleAdjacentLights(x, y) {
    if (x > 0) lights[x-1][y] = !lights[x-1][y];
    if (x < 1) lights[x+1][y] = !lights[x+1][y];
    if (y > 0) lights[x][y-1] = !lights[x][y-1];
    if (y < 1) lights[x][y+1] = !lights[x][y+1];
}

function updateBoard() {
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            let light = document.getElementById("gameBoard").children[i * 2 + j];
            light.className = lights[i][j] ? "light on" : "light";
        }
    }
}

function checkWin() {
    if (lights.every(row => row.every(light => !light))) {  // 检查是否所有灯都灭了
        setTimeout(() => alert("你赢了！"), 300);
    }
}

window.onload = updateBoard;
