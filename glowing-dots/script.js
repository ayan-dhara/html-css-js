
const createElement = (tag) => {
  return document.createElement(tag);
}

const setDisplayMatrix = () => {
  
}

const setDisplay = (dotCount) => {
  console.log(dotCount);
  body.innerHTML = '';
  for(let i = 0; i < dotCount; i++){
    let outerSpan = createElement("span");
    let innerSpan = createElement("span");
    outerSpan.appendChild(innerSpan);
    body.appendChild(outerSpan);
  }
}

const checkDisplayMatrix = () => {
  if(!window.lastDisplayWidth)
    window.lastDisplayWidth = 0;
  
  if(!window.lastDisplayHeight)
    window.lastDisplayHeight = 0;
  
  if(window.innerHeight != window.lastDisplayHeight || window.innerWidth != window.lastDisplayWidth){
    const height = window.innerHeight;
    const width = window.innerWidth;
    let dotMaxHeight = height * width / 20000;
    if(dotMaxHeight > 50)
      dotMaxHeight = 50;
    if(dotMaxHeight < 30)
      dotMaxHeight = 30;
    
    let dotWidth = width;
    let dotHeight = height;
    let dotGlow = "";
    let count = 1;
    while(dotHeight > dotMaxHeight)
      dotHeight = height / count++;

    count = 1;
    while(dotWidth > dotMaxHeight)
      dotWidth = width / count++;

    document.documentElement.style.setProperty('--dot-size', dotMaxHeight + "px");
    document.documentElement.style.setProperty('--dot-width', dotWidth + "px");
    document.documentElement.style.setProperty('--dot-height', dotHeight + "px");

    setDisplay((height * width) / (dotHeight * dotWidth));

    window.lastDisplayHeight = height;
    window.lastDisplayWidth = width;
  }
}

const keepCheckingDisplayMAtrix = () => {
  checkDisplayMatrix();
  setTimeout(keepCheckingDisplayMAtrix, 1000);
}

const init = () => {
  window.body = document.body;
  keepCheckingDisplayMAtrix();
}

window.onload = init;