let size = 10;
let orderElement = 1;



const init = () => {
    const button = document.createElement('button');
    const ul = document.createElement('ul');
    document.body.appendChild(button); // adding elements to body
    button.style.width = "50px";
    button.style.height = "50px";
    button.textContent = "kliknij";
    button.style.marginLeft = "50%";
    document.body.appendChild(ul);
}

const createElements = () => {
    console.log('test');
    const ul = document.querySelector("ul"); 
    
    
    // const ul = document.querySelector("ul"); 
    for (let i=0; i<10; i++) {
        console.log('test1');
        let li = document.createElement('li');
        li.textContent = "Element"+orderElement;
        li.style.fontSize = size+"px";
        ul.appendChild(li); 
        orderElement += 1;
        size += 1;
    }
    }

init()

const button = document.querySelector("button"); 
button.addEventListener("click", createElements);