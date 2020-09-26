const container = document.getElementById('container'); 
const square = document.getElementById('square');  
square.style.left = (Math.floor(Math.random() * (container.offsetWidth-square.offsetWidth)) + 1)+ 'px'; 
square.style.top = (Math.floor(Math.random() * (container.offsetHeight-square.offsetHeight)) + 1) + 'px';
var move_blocks = 1;
var current_direction = 37;
var square_left = (Math.floor(Math.random() * (container.offsetWidth-square.offsetWidth)) + 1);
var square_top = (Math.floor(Math.random() * (container.offsetHeight-square.offsetHeight)) + 1);
square.offsetTop
var current_interval = setInterval(function(){
                                                var square_LeftPos = square.offsetLeft;
                                                square.style.left = (square_LeftPos + move_blocks) + 'px';

                                            }, 20);






function anim(e){
    if(e.keyCode == 37 && current_direction != 37 && current_direction != 39){//left
        clearInterval(current_interval);
        current_direction = 37;
        current_interval =  setInterval(function(){
            var square_LeftPos = square.offsetLeft;
            square.style.left = (square_LeftPos - move_blocks) + 'px';
        
        }, 20);
    }

    if(e.keyCode == 39 && current_direction != 39 && current_direction != 37){//right
        clearInterval(current_interval);
        current_direction = 39;
        current_interval =  setInterval(function(){
                                var square_LeftPos = square.offsetLeft;
                                square.style.left = (square_LeftPos + move_blocks) + 'px';
                            
                            }, 20);
    }

    if(e.keyCode == 38 && current_direction != 40 && current_direction != 40){//up
        clearInterval(current_interval);
        current_direction = 38;
        current_interval =  setInterval(function(){
                                var square_TopPos = square.offsetTop;
                                square.style.top = (square_TopPos - move_blocks) + 'px';
                            
                            }, 20);
    }

    if(e.keyCode == 40 && current_direction != 38 && current_direction != 38){//down
        clearInterval(current_interval);
        current_direction = 40;
        current_interval =  setInterval(function(){
                                var square_TopPos = square.offsetTop;
                                square.style.top = (square_TopPos + move_blocks) + 'px';
                            
                            }, 20);
    }

}

document.onkeydown = anim;














