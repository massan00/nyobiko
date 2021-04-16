const ul = document.querySelector('#kana');
const kana = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];
for (let i = 0; i < kana.length; i++) {
    for (let j = 0; j < kana.length; j++) {
        let li = document.createElement('li');
        li.textContent = `${kana[i]}${kana[j]}`;
        ul.appendChild(li);
    }
}
