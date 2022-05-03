let previousClick = "O"
console.log(previousClick)

const gameBoard = (() => {
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
            }
        }
    
        //Render
        function render(){
           createBoard();
        }
        render();
        //Alternates X and O inputs
        function playerSelection(e){
            if (e.target.textContent === false)
                return;
            if (previousClick === "X") {
                board.textContent = "Player X's Turn"
                e.target.textContent = "O"
                previousClick = "O";
            }else if (previousClick === "O"){ 
                board.textContent = "Player O's Turn"
                e.target.textContent = "X";
                previousClick = "X";       
            } game.checkWin();     
        }  
    
        return{
            playerSelection
        }
})()

const game = (() => {  
    //Searches board if there is a winning combo
    let cellsClicked = 0
    function checkWin(){ 
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
    //Checks for all possible combos to win, if none result will be draw    
    cellsClicked += 1
    for (let i=0,n=winCombos.length; i<n; i++){
        const squares = document.querySelectorAll('div.square')
        let currentCombos = winCombos[i];
        let value = squares[currentCombos[0]].textContent;
        if (value !== '')
        {
            if (squares[currentCombos[1]].textContent === value && squares[currentCombos[2]].textContent === value)
            {
                display.textContent = "We have a winner" + " " + previousClick; 
                board.textContent = ''        
            }else if(squares[currentCombos[1]].textContent !== value && squares[currentCombos[2]].textContent !== value && cellsClicked === 9) 
                display.textContent = "Draw"
        }displayControl.displayWinner();
    } 
    } 
    return {
        checkWin
    }
})()

const displayControl = (()=>{
    //cache dom
    const restart = document.getElementById('restart')
    //bind events
    restart.addEventListener('click', (e) => {
        location.reload();
      });

    function displayWinner(){
        if (display.textContent === "We have a winner" + " " + previousClick || display.textContent === "Draw"){
            modal.style.display = 'block'   
        }
    }
    return{
        displayWinner
    }
})()

const playerFactory = (() => {
    //Cache Dom
    const btnO = document.getElementById('O')
    const btnX = document.getElementById('X')

    //Bind Events
    btnO.addEventListener('click', (e) => {
        previousClick = 'X'
        board.textContent = "Player O's Turn"
    })
    btnX.addEventListener('click', (e) => {
        previousClick = 'O'
        board.textContent = "Player X's Turn"
    })
})() 


