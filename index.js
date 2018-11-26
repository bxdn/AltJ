function initialize(){

    var circ1 = document.getElementById("circle1");
    var circ2 = document.getElementById("circle2");
    var circ3 = document.getElementById("circle3");
    var circ4 = document.getElementById("circle4");
    circ1.addEventListener("click", function(){
        circ1.classList.add('circleOut');
        circ2.classList.add('circleIn');
        document.getElementById("circle1Aud").play();
    });
    circ2.addEventListener("click", function(){
        circ2.classList.add('circleOut');
        circ3.classList.add('circleIn');
        document.getElementById("circle2Aud").play();
    });
    circ3.addEventListener("click", function(){
        circ3.classList.add('circleOut');
        circ4.classList.add('circleIn');
        document.getElementById("circle3Aud").play();
    });
    circ4.addEventListener("click", function(){
        circ4.classList.add('circleOut');
        var buttons = [circ1, circ2, circ3, circ4];
        document.getElementById("circle4Aud").play();
        setTimeout(()=>{
            for(let i = 0; i < buttons.length; i++){
                buttons[i].classList.remove('circleIn');
                buttons[i].classList.remove('circleOut');
                buttons[i].classList.add('circleIn');
                var clearButton = buttons[i].cloneNode(true);
                buttons[i].parentNode.replaceChild(clearButton, buttons[i]);  
                buttons[i] = clearButton      
            }
            document.getElementById("mainContainer").classList.remove('rotate','rotate2');
            document.getElementById("mainContainer").style.animation = 'none';
            document.getElementById("mainContainer").offsetHeight; /* trigger reflow */
            document.getElementById("mainContainer").style.animation = null; 
            document.getElementById("mainContainer").classList.add('rotate');
        },1000);
        setTimeout(()=>{
            for(let i = 0; i < buttons.length; i++){
                buttons[i].classList.remove('circleOut','circleIn');
                buttons[i].style.animation = 'none';
                buttons[i].offsetHeight; /* trigger reflow */
                buttons[i].style.animation = null; 
                buttons[i].classList.add('fadeOut');
            }
        },13000);
    });

    const hiText = document.getElementById('hello');
    const letsText = document.getElementById('lets');
    const audioText = document.getElementById('audText');
    const phones = document.getElementById('phones');
    /*hiText.style.display = 'flex';
    hiText.classList.add('fadeIn');
    setTimeout(()=>{fadeOut(hiText)},2000);
    setTimeout(()=>{fadeIn(hiText,letsText)},4000);
    setTimeout(()=>{fadeOut(letsText)},6000);
    setTimeout(()=>{fadeIn(letsText,audioText)},8000);
    setTimeout(()=>{fadeOut(audioText)},10000);
    setTimeout(()=>{fadeIn(audioText,phones)},12000);
    setTimeout(()=>{fadeOut(phones)},14000);
    setTimeout(()=>{fadeAudio()},16000);
    setTimeout(()=>{document.getElementById('circle1').classList.add('circleIn');},18000);*/
    fadeAudio();
    setTimeout(()=>{document.getElementById('circle1').classList.add('circleIn');},2000);
}

function main(){
    initialize();
}

function fadeIn(outFade,inFade){
    outFade.style.display = 'none';
    inFade.style.display = 'flex';
    inFade.classList.add('fadeIn');
}

function fadeOut(outFade){
    outFade.classList.remove('fadeIn');   
    outFade.classList.add('fadeOut');
}

function fadeAudio(){
    const audio = document.getElementById("rain");
    audio.volume = 0;
    audio.muted = false;

    setInterval(()=>{
        if (audio.volume < .5){
            audio.volume += .0005;
        }
    },1)
}

main();