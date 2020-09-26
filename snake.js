const container = document.getElementById('container'); 
const square = document.getElementById('square');  
square.style.left = (Math.floor(Math.random() * (container.offsetWidth-square.offsetWidth)) + 1)+ 'px'; 
square.style.top = (Math.floor(Math.random() * (container.offsetHeight-square.offsetHeight)) + 1) + 'px';
const apple = document.getElementById('apple');
apple.style.left = (Math.floor(Math.random() * (container.offsetWidth-apple.offsetWidth)) + 1)+ 'px'; 
apple.style.top = (Math.floor(Math.random() * (container.offsetHeight-apple.offsetHeight)) + 1) + 'px';
var game_end = false;
var move_blocks = 1;
var current_direction = 37;
var square_left = (Math.floor(Math.random() * (container.offsetWidth-square.offsetWidth)) + 1);
var square_top = (Math.floor(Math.random() * (container.offsetHeight-square.offsetHeight)) + 1);
var current_interval = setInterval(function(){
                                                
                                                if(parseInt(square.style.left) <= parseInt('0px') || parseInt(square.style.left) >= parseInt((container.offsetWidth-square.offsetWidth) +'px') || parseInt(square.style.top) <= parseInt('0px') || parseInt(square.style.top) >= parseInt((container.offsetHeight-square.offsetHeight)+'px')){
                                                    alert('Game over !');
                                                    return
                                                }
                                                var square_LeftPos = square.offsetLeft;
                                                square.style.left = (square_LeftPos + move_blocks) + 'px';

                                            }, 20);



function game_over(){
    if(parseInt(square.style.left) <= parseInt('0px') || parseInt(square.style.left) >= parseInt((container.offsetWidth-square.offsetWidth) +'px') || parseInt(square.style.top) <= parseInt('0px') || parseInt(square.style.top) >= parseInt((container.offsetHeight-square.offsetHeight)+'px')){
        alert('Game over !');
        game_end = true;
    }
}


function change_direction(e){

    
    if(e.keyCode == 37 && current_direction != 37 && current_direction != 39){//left
        clearInterval(current_interval);
        current_direction = 37;
        current_interval =  setInterval(function(){
            game_over();
            if(game_end == true) return;                   
            var square_LeftPos = square.offsetLeft;
            square.style.left = (square_LeftPos - move_blocks) + 'px';
        
        }, 20);
    }

    if(e.keyCode == 39 && current_direction != 39 && current_direction != 37){//right
        clearInterval(current_interval);
        current_direction = 39;
        current_interval =  setInterval(function(){
                                game_over();
                                if(game_end == true) return;
                                var square_LeftPos = square.offsetLeft;
                                square.style.left = (square_LeftPos + move_blocks) + 'px';
                            
                            }, 20);
    }

    if(e.keyCode == 38 && current_direction != 40 && current_direction != 40){//up
        clearInterval(current_interval);
        current_direction = 38;
        current_interval =  setInterval(function(){
                                game_over();
                                if(game_end == true) return;
                                var square_TopPos = square.offsetTop;
                                square.style.top = (square_TopPos - move_blocks) + 'px';
                            
                            }, 20);
    }

    if(e.keyCode == 40 && current_direction != 38 && current_direction != 38){//down
        clearInterval(current_interval);
        current_direction = 40;
        current_interval =  setInterval(function(){
                                game_over();
                                if(game_end == true) return;
                                var square_TopPos = square.offsetTop;
                                square.style.top = (square_TopPos + move_blocks) + 'px';
                            
                            }, 20);
    }

}

document.onkeydown = change_direction;














