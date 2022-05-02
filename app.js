const gameBoard = (function(){
    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    
    let previousClick = "O"

    //Cache Dom
    const display = document.getElementById('display')
    const restart = document.getElementById('restart')
    //DOM creation 
    const container = document.createElement('container');
    document.body.appendChild(container);
    function createBoard(){
        for (let i = 0; i<9; i++){
            const div = document.createElement('div')    
            div.className = 'square'
            container.appendChild(div);   
            //bind Events
            div.addEventListener('click',playerSelection, {once:true});
            restart.addEventListener('click',resetGame)
        }
    }

    //Render
    function render(){
        createBoard();
    }
    render();

    function playerSelection(e){
        if (e.target.textContent === false)
            return;
        if (previousClick === "X") {
            e.target.textContent = "O"
            previousClick = "O";
            checkWin();
        }else if (previousClick === "O"){
            e.target.textContent = "X";
            previousClick = "X";     
            checkWin();
        }
       
    }    
    function checkWin(){ 
    for (let i=0,n=winCombos.length; i<n; i++)
    {
        const squares = document.querySelectorAll('div.square')
        let currentCombos = winCombos[i];
        let value = squares[currentCombos[0]].textContent;
        if (value !== '')
        {
            if (squares[currentCombos[1]].textContent == value && squares[currentCombos[2]].textContent == value)
            {
                display.textContent = "Winner";
            }
        }
    }
}
    function resetGame (){
        location.reload();
    }
})()