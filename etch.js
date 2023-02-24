
for (let index = 0; index < 256; index++){
    const grid = document.getElementById("grid");
    const gridbox = document.createElement('div');
    let erase = document.getElementById("erase");
    gridbox.classList.add('gridbox');
    grid.appendChild(gridbox);
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    gridbox.addEventListener('click', function (e) {
        this.style.backgroundColor = "#" + randomColor;
    })   
    gridbox.addEventListener('dblclick', function (e){
        this.style.backgroundColor = 'white';
    })
    erase.addEventListener('click', function (e){
        gridbox.style.backgroundColor = 'white';
    })
}