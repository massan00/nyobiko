const button = document.querySelector('#assessment');
const name = document.querySelector("#user-name");

button.addEventListener('click', (event) =>{
    const inputName = name.value;
    const answer = document.querySelector('#answer');
    answer.textContent = `こんにちは。あるいはこんばんは${inputName}`;
    name.value = '';
    name.focus();
})