const container = document.querySelector('#container');

const para = document.createElement('p');
para.textContent = '"Hey I\'m Red"';
para.style.color = 'red';
container.appendChild(para);

const h3 = document.createElement('h3');
h3.textContent = '"I\'m a blue h3"';
h3.style.color = 'blue';
container.appendChild(h3);

const div = document.createElement('div');
div.classList.add('blk');
container.appendChild(div);

const blkDiv = document.querySelector('.blk');
blkDiv.style.cssText = 'border: 3px solid black; background-color: pink';

const innerH1 = document.createElement('h1');
innerH1.textContent = '"I\'m a div"';

const innerPara = document.createElement('p')
innerPara.textContent = 'ME TOO!'

blkDiv.appendChild(innerH1);
blkDiv.appendChild(innerPara);

container.appendChild(blkDiv);


const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn-2');
btn2.addEventListener('click', () => {
    alert("Hello World");
});

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});