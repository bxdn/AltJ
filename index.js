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

function reflow(el){
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null;
}

function firstTrigger(buttons,cont){
    buttons[3].classList.add('circleOut');
    document.getElementById("circle4Aud").play();
    setTimeout(()=>{
        for(let i = 0; i < 4; i++){
            buttons[i] = rmBtnFunction(buttons[i]);
        }
        cont.classList.remove('rotate2');
        reflow(cont);
        cont.classList.add('rotate');
    },1000);
    setTimeout(()=>{
        for(let i = 0; i < 4; i++){
            buttons[i].classList.add('circleOut');
        }
        buttons[4].style.display = 'block';
        buttons[4].classList.add('circleIn');
    },13000);
}

function secondTrigger(buttons,cont){
    buttons[9].classList.add('circleOut');
    document.getElementById("circle10Aud").play();
    setTimeout(()=>{
        cont.classList.remove('rotate');
        reflow(cont);
        cont.classList.add('rotate');
        for(let i = 4; i < 10; i++){
            buttons[i] = rmBtnFunction(buttons[i]);
        }
        buttons[0].classList.add('circ1');
        buttons[1].classList.add('circ1');
        buttons[2].classList.add('circ2');
        buttons[3].classList.add('circ2');
    },500);
    setTimeout(()=>{
        for(let i = 0; i < 10; i++){
            buttons[i].classList.remove('circleOut','circleIn','circ1','circ2');
            buttons[i].classList.add('fadeOut');
        }
        buttons[0].style.top = '12%';
        buttons[1].style.top = '12%';
        buttons[2].style.top = '88%';
        buttons[3].style.top = '88%';
    },12500);
}

function rmBtnFunction(el){
    el.classList.remove('circleIn');
    el.classList.remove('circleOut');
    var clearButton = el.cloneNode(true);
    el.parentNode.replaceChild(clearButton, el);
    clearButton.classList.add('circleIn');
    return clearButton
}

function addListeners(){
    var buttons = []
    for(let i=0; i<10; i++){
        const id = "circle" + (i+1).toString();
        buttons.push(document.getElementById(id));
    }
    for(let i=0; i<9; i++){
        if(i!=3){
            const audId = "circle"+(i+1).toString()+"Aud";
            buttons[i].addEventListener("mouseenter", function(){
                buttons[i].classList.add('circleOut');
                buttons[i+1].style.display = "block";
                buttons[i+1].classList.add('circleIn');
                document.getElementById(audId).play();
            });
        }
    }
    var mainCont = document.getElementById("mainContainer");
    buttons[3].addEventListener("mouseenter", function(){firstTrigger(buttons,mainCont)});
    buttons[9].addEventListener("mouseenter", function(){secondTrigger(buttons,mainCont)});
}

function introText(){
    const hiText = document.getElementById('hello');
    const letsText = document.getElementById('lets');
    const audioText = document.getElementById('audText');
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
    /*introText();
    setTimeout(()=>{fadeAudio()},12000);
    setTimeout(()=>{
        document.getElementById('circle1').style.display = 'block';
        document.getElementById('circle1').classList.add('circleIn');
    },13000);*/
    setTimeout(()=>{fadeAudio()},1000);
    setTimeout(()=>{
        document.getElementById('circle1').style.display = 'block';
        document.getElementById('circle1').classList.add('circleIn');
    },2000);
}

function main(){
    initialize();
}

main();
