let slots = [
    "","","",
    "","","",
    "","",""
];
let player1= "x";
let player2= "o";
let turn = 1;
let countMoves = 0;
let gameOver = false;


let board = function(event){
    if (gameOver === true ){
        $(this).off('click');
       $( "#hidden" ).html( "<p>The game is over, click reset.</p>" );
       //alert("The game is over, click reset")
    } else {
        countMoves++;
        if (turn === 1) {
        
            event.target.innerHTML = player1;
            const position =$(event.target).attr("id")
            slots[position] = player1
            event.target.style.color = 'blue'
            $(this).css('font-fmaily', 'Comic Sans MS');

            turn++;
            $(this).off('click');
        
        }else {
            event.target.innerHTML = player2;
            const position =$(event.target).attr("id")
            slots[position] = player2
            event.target.style.color = 'yellow'
            
            turn--;
            $(this).off('click');
        
        }
        console.log(slots);
        
        winning();
        if (countMoves === 9 && gameOver !== true) {
            setTimeout(function(){
                alert("ties ")
            },500);
        }  
    }
    
     
};


$('#x').click(function () {
        
    player1 = 'x';
    player2 ='o'
    $('#x').removeClass('btn-x');
    $('#o').addClass('btn-o');
    

})

$('#o').click(function () {

    player1 = 'o';
    player2 ='x'
    $('#o').removeClass('btn-o');
    $('#x').addClass('btn-x');
    
})

$('#reset').click(function(){
    slots = [
        "","","",
        "","","",
        "","",""
    ];
    turn = 1;
    $('.flex-item').text('')
    $('.flex-item').on('click',board);
    countMoves=0;
    gameOver=false;
    $('#x').addClass('btn-x');
    $('#o').addClass('btn-o');
})

$('.flex-item').click(board)

function winning() {
        //check virtical
    if (slots[0] !== "" && slots[0] === slots[1] && slots[0] === slots[2]){
      
        
        gameOver = true
    }
    else if (slots[3] !=='' && slots[3] === slots[4] && slots[3] === slots[5]) {

      
        
        gameOver = true

    }  else if (slots[6] !=='' && slots[6] === slots[7] && slots[6] === slots[8]) {

      
        gameOver = true
        //check horizontal

    } else if (slots[0] !=='' && slots[0] === slots[3] && slots[0] === slots[6]) {

      
        gameOver = true

    } else if (slots[1] !=='' && slots[1] === slots[4] && slots[1] === slots[7]) {

      
        gameOver = true

    } else if (slots[2] !=='' && slots[2] === slots[5] && slots[2] === slots[8]) {

      
        gameOver = true
        //check diagonal
    } else if (slots[0] !=='' && slots[0] === slots[4] && slots[0] === slots[8]) {

      
        gameOver = true

    } else if (slots[2] !=='' && slots[2] === slots[4] && slots[2] === slots[6]) {

      
        gameOver = true
    }

    if(gameOver === true) {
        if (turn !==1){
            setTimeout(function(){
                alert(player1 + " player won " )
            },500);
        }else {
            setTimeout(function(){
                alert(player2 + " player won ")
            },500);
        }
        
    }
}
   
  
    




