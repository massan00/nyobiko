const logic = document.querySelector('#logic');
logic.addEventListener('submit', (event) => {
    event.preventDefault();
    const { age, member } = event.target.elements;
    const inputAge = parseInt(age.value);
    const isMember = member[0].checked;
    let price = null;

    if (inputAge <= 15) {
        price = 800;
    } else if (isMember) {
        price = 1000;
    } else {
        price = 1800;
    }

    const displayPrice = document.querySelector('#price');
    displayPrice.textContent = `料金は${price}円です。`
})