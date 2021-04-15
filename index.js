const ul = document.querySelector('#fizzbuzz');

for (let i = 1; i <= 100; i++) {
    let answer = null;
    if (i % 15 == 0) {
        answer = "FizzBuzz";
    } else if (i % 5 == 0) {
        answer = 'Buzz';
    } else if (i % 3 == 0) {
        answer = 'Fizz';
    } else {
        answer = i;
    }
    const li = document.createElement('li');
    li.textContent = `${i}: ${answer}`;
    ul.appendChild(li);
}