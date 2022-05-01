const gameBoard = (function(){
    var gameboard = [];

    //DOM creation 
    const container = document.createElement('container');
    document.body.appendChild(container);
    function createBoard(){
        for (let i = 0; i<9; i++){
            const div = document.createElement('div')
            div.className = 'square'
            container.appendChild(div);
        }
    }
    //Cache Dom
    const div = document.querySelectorAll('.square')
    //Bind Events

       
    //Render
    function render(){
        createBoard();
        player1();
    }
    render();

    function player1(){
        div.textContent= "X"
    }

    function player2(){
        div.textContent= "O"
    }
})()