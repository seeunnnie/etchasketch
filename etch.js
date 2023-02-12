for (let index = 0; index < 256; index++){
    const grid = document.getElementById("grid");
    const gridbox = document.createElement('div');
    gridbox.classList.add('gridbox');
    grid.appendChild(gridbox);
    gridbox.addEventListener('click', function (e) {
        this.style.backgroundColor = '#3d3d3d';
    })   
    gridbox.addEventListener('dblclick', function (e){
        this.style.backgroundColor = 'white';
    })
}


let gridSize = document.getElementById("squares")
gridSize.addEventListener('click', function (e){
    let gridNum = prompt("please input a grid size from 16 to 100");
    console.log(gridNum * gridNum);
    let newSize = gridNum * gridNum
    for (let index = 0; index < newSize; index++){
        const grid = document.getElementById("grid");
        const gridbox = document.createElement('div');
        gridbox.classList.add('gridbox');
        grid.appendChild(gridbox);
        gridbox.addEventListener('click', function (e) {
            this.style.backgroundColor = '#3d3d3d';
        })   
        gridbox.addEventListener('dblclick', function (e){
            this.style.backgroundColor = 'white';
        })
    }
})