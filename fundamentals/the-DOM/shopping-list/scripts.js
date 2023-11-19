let list = document.querySelector("ul");
let input = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const text = input.value;
    input.value = '';
    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const btn2 = document.createElement('button');

    listItem.append(span,btn2);

    span.textContent = text;
    btn2.textContent = 'Delete';

    list.appendChild(listItem);
    btn2.addEventListener('click', () => {
        listItem.remove();
    })
    
    input.focus();

});
