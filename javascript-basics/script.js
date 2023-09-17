const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para1 = document.createElement('p');
para1.classList.add('para1');
para1.textContent = "Hey I'm red!";
para1.style.color = 'red';

container.appendChild(para1);

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';

container.appendChild(h3);

const block = document.createElement('div');
block.classList.add('block');
block.setAttribute('style', 'background-color = pink, border = solid black');

const h1 = document.createElement('h1');
h1.classList.add('h1');
h1.textContent = "I'm in a div";

block.appendChild(h1);

const para2 = document.createElement('p');
para2.classList.add('para2');
para2.textContent = "ME TOO!";

block.appendChild(para2);

container.appendChild(block);