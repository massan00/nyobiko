function calculateArea(radius) {
    const area = radius * radius * 3.14;
    const p = document.createElement('p');
    p.textContent = `半径${radius}cmの円の面積は${area}平方cmです`;
    const div = document.querySelector('#area');
    div.appendChild(p);
}

calculateArea(5);
calculateArea(10);
calculateArea(15);
