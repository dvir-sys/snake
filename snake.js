var score = 0;
document.getElementById("demo").innerHTML ='Score: '+ score;
const board = document.getElementById('board'); 
const snake = document.getElementById('snake');  
snake.style.left = (Math.floor(Math.random() * (board.offsetWidth-snake.offsetWidth)) + 1)+ 'px'; 
snake.style.top = (Math.floor(Math.random() * (board.offsetHeight-snake.offsetHeight)) + 1) + 'px';
const apple = document.getElementById('apple');
apple.style.left = (Math.floor(Math.random() * (board.offsetWidth-apple.offsetWidth)) + 1)+ 'px'; 
apple.style.top = (Math.floor(Math.random() * (board.offsetHeight-apple.offsetHeight)) + 1) + 'px';
var game_end = false;
var move_blocks = 1;
var current_direction = 37;
var snake_left = (Math.floor(Math.random() * (board.offsetWidth-snake.offsetWidth)) + 1);
var snake_top = (Math.floor(Math.random() * (board.offsetHeight-snake.offsetHeight)) + 1);
var current_interval = setInterval(function(){
                                                game_over();
                                                if(game_end == true) return;
                                                var snake_LeftPos = snake.offsetLeft;
                                                snake.style.left = (snake_LeftPos + move_blocks) + 'px';
                                                eatApple();

                                            }, 20);




                                            
function game_over(){
    if(parseInt(snake.style.left) <= parseInt('0px') || parseInt(snake.style.left) >= parseInt((board.offsetWidth-snake.offsetWidth) +'px') || parseInt(snake.style.top) <= parseInt('0px') || parseInt(snake.style.top) >= parseInt((board.offsetHeight-snake.offsetHeight)+'px')){
        alert('Game over !\nTry again');
        game_end = true;
    }
}

function eatApple(){
    if( apple.style.left>=snake.style.left && apple.style.left<=(snake.style.left + snake.offsetWidth) &&  apple.style.top>=snake.style.top && apple.style.top<=(snake.style.top + snake.offsetHeight) ||
        (apple.style.left+apple.offsetWidth)>=snake.style.left && (apple.style.left+apple.offsetWidth)<= (snake.style.left + snake.offsetWidth) &&  (apple.style.top+apple.offsetHeight) >= snake.style.top && (apple.style.top+apple.offsetHeight)<= (snake.style.top + snake.offsetHeight) ||
        apple.style.left >= snake.style.left && apple.style.left<= (snake.style.left + snake.offsetWidth) &&  (apple.style.top+apple.offsetHeight) >= snake.style.top && (apple.style.top+apple.offsetHeight)<= (snake.style.top + snake.offsetHeight) ||
        (apple.style.left+apple.offsetWidth) >= snake.style.left && (apple.style.left+apple.offsetWidth)<= (snake.style.left + snake.offsetWidth) &&  apple.style.top >= snake.style.top && apple.style.top<= (snake.style.top + snake.offsetHeight) 
      )
    {
        apple.style.left = (Math.floor(Math.random() * (board.offsetWidth-apple.offsetWidth)) + 1)+ 'px'; 
        apple.style.top = (Math.floor(Math.random() * (board.offsetHeight-apple.offsetHeight)) + 1) + 'px';
        score += 1;
        document.getElementById("demo").innerHTML = 'Score: '+ score;

    }
}


function change_direction(e){
    
    if(Math.abs(e.keyCode- current_direction) % 2 ==0 || e.keyCode > 40 || e.keyCode < 37) return;
    clearInterval(current_interval);
    current_direction = e.keyCode;
    var snake_LeftPos = snake.offsetLeft;
    var snake_TopPos = snake.offsetTop;
    if(game_end == true) return;  
    if(e.keyCode == 37){//left
        current_interval =  setInterval(function(){
                                game_over();
                                if(game_end == true) return;
                                var snake_LeftPos = snake.offsetLeft;
                                snake.style.left = (snake_LeftPos - move_blocks) + 'px';
                                eatApple();                       
        }, 20);
    }

    if(e.keyCode == 39){//right
        current_interval =  setInterval(function(){
                                game_over();
                                if(game_end == true) return;
                                var snake_LeftPos = snake.offsetLeft;
                                snake.style.left = (snake_LeftPos + move_blocks) + 'px';   
                                eatApple();                          
                            }, 20);
    }

    if(e.keyCode == 38){//up
        current_interval =  setInterval(function(){
                                game_over();
                                if(game_end == true) return;
                                var snake_TopPos = snake.offsetTop;
                                snake.style.top = (snake_TopPos - move_blocks) + 'px';
                                eatApple();
                            }, 20);
    }

    if(e.keyCode == 40){//down
        current_interval =  setInterval(function(){
                                game_over();
                                if(game_end == true) return;
                                var snake_TopPos = snake.offsetTop;
                                snake.style.top = (snake_TopPos + move_blocks) + 'px';
                                eatApple();
                            }, 20);
    }

}

document.onkeydown = change_direction;















