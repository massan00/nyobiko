const counter = {
    number: 0,
    countUp: function () {
        counter.number++;
    },
    countDown: function () {
        counter.number--;
    },
    countReset: function () {
        counter.number = 0;
    }
}

const button = document.createElement('button');
button.textContent = 'カウントアップ';

const button2 = document.createElement('button');
button2.textContent = 'カウントダウン';

const button3 = document.createElement('button');
button3.textContent = 'カウントリセット';

const p = document.createElement('p');
p.textContent = counter.number;


const num = document.querySelector('#area');
num.appendChild(p);
num.appendChild(button);
num.appendChild(button2);
num.appendChild(button3);


button.addEventListener('click', () => {
    counter.countUp();
    p.textContent = counter.number;
});

button2.addEventListener('click', () => {
    counter.countDown();
    p.textContent = counter.number;
})

button3.addEventListener('click', () => {
    counter.countReset();
    p.textContent = counter.number;
})