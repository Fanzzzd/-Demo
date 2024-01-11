var lights = [[true, true], [true, true]];  // 初始状态改为所有灯都亮着

function toggleLights(x, y) {
    lights[x][y] = !lights[x][y];
    toggleAdjacentLights(x, y);

    updateBoard();
    checkWin();
}

function toggleAdjacentLights(x, y) {
    if (x > 0) lights[x-1][y] = !lights[x-1][y];
    if (x < 2) lights[x+1][y] = !lights[x+1][y];  // 修改边界条件
    if (y > 0) lights[x][y-1] = !lights[x][y-1];
    if (y < 2) lights[x][y+1] = !lights[x][y+1];  // 修改边界条件
}

function updateBoard() {
    for (let i = 0; i < 3; i++) {  // 更新循环条件
        for (let j = 0; j < 3; j++) {  // 更新循环条件
            let light = document.getElementById("gameBoard").children[i * 3 + j];  // 更新索引
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
