const areaCalc = document.querySelector('#areacalc');
areaCalc.addEventListener('submit', (event) => {
    event.preventDefault();
    const { radius } = event.target.elements;
    const radiusValue = radius.value;
    const area = radiusValue * radiusValue * 3.14;

    const circleArea = document.querySelector('#circle-area');
    circleArea.textContent = `円の面積は${area}平方センチメートルです。`;
})