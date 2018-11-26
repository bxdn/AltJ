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

function circleListener(circ1,circ2){
    circ1.classList.add('circleOut');
    circ2.classList.add('circleIn');
}

function reflow(el){
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null;
}

function addListeners(){
    var buttons = []
    for(let i=0; i<10; i++){
        const id = "circle" + (i+1).toString();
        buttons.push(document.getElementById(id));
    }
    for(let i=0; i<3; i++){
        const audId = "circle"+(i+1).toString()+"Aud";
        buttons[i].addEventListener("click", function(){
            circleListener(buttons[i],buttons[i+1]);
            document.getElementById(audId).play();
        });
    }
    for(let i=4; i<9; i++){
        buttons[i].addEventListener("click", function(){
            circleListener(buttons[i],buttons[i+1]);
        });
    }
    buttons[3].addEventListener("click", function(){
        buttons[3].classList.add('circleOut');
        document.getElementById("circle4Aud").play();
        setTimeout(()=>{
            for(let i = 0; i < 4; i++){
                buttons[i].classList.remove('circleIn');
                buttons[i].classList.remove('circleOut');
                buttons[i].classList.add('circleIn');
                var clearButton = buttons[i].cloneNode(true);
                buttons[i].parentNode.replaceChild(clearButton, buttons[i]);
                buttons[i] = clearButton
            }
            mainCont = document.getElementById("mainContainer");
            mainCont.classList.remove('rotate2');
            reflow(mainCont);
            mainCont.classList.add('rotate');
        },1000);
        setTimeout(()=>{
            for(let i = 0; i < 4; i++){
                buttons[i].classList.remove('circleOut','circleIn');
                reflow(buttons[i]);
                buttons[i].classList.add('circleOut');
                buttons[4].classList.add('circleIn');
            }
        },13000);
    });
    buttons[9].addEventListener("click", function(){
        buttons[9].classList.add('circleOut');
        setTimeout(()=>{
            for(let i = 0; i < 10; i++){
                mainCont.classList.remove('rotate');
                reflow(mainCont);
                mainCont.classList.add('rotate');
                buttons[i].classList.remove('circleIn');
                buttons[i].classList.remove('circleOut');
                buttons[i].classList.add('circleIn');
                var clearButton = buttons[i].cloneNode(true);
                buttons[i].parentNode.replaceChild(clearButton, buttons[i]);
                buttons[i] = clearButton
            }
        },1000);
    })
}

function introText(){
    const hiText = document.getElementById('hello');
    const letsText = document.getElementById('lets');
    const audioText = document.getElementById('audText');
    const phones = document.getElementById('phones');
    hiText.style.display = 'flex';
    hiText.classList.add('fadeIn');
    setTimeout(()=>{fadeOut(hiText)},2000);
    setTimeout(()=>{fadeIn(hiText,letsText)},4000);
    setTimeout(()=>{fadeOut(letsText)},6000);
    setTimeout(()=>{fadeIn(letsText,audioText)},8000);
    setTimeout(()=>{fadeOut(audioText)},10000);
}

function initialize(){
    addListeners();
    //introText();
    //setTimeout(()=>{fadeAudio()},12000);
    //setTimeout(()=>{document.getElementById('circle1').classList.add('circleIn');},14000);
    setTimeout(()=>{fadeAudio()},1000);
    setTimeout(()=>{document.getElementById('circle1').classList.add('circleIn');},2000);
}

function main(){
    initialize();
}

main();
