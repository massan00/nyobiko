function countDown() {
    const now = Date.now();
    const finishDate = new Date(2021, 3, 25, 0, 0, 0);

    const remainingHour = Math.floor((finishDate.getTime() - now) / (1000 * 60 * 60));
    const divhour = (finishDate.getTime() - now) % (1000 * 60 * 60);
    const remainingMinuits = Math.floor(divhour / (1000 * 60));
    const divMinuits = divhour % (1000 * 60);
    const remainingSeconds = Math.floor(divMinuits / 1000);
    const divSeconds = divMinuits % 1000;
    const remainingMseconds = Math.floor(divSeconds);

    const area = document.querySelector('#area')
    area.textContent = `残り${remainingHour}時間${remainingMinuits}分${remainingSeconds}秒${remainingMseconds}`;

}
setInterval(countDown, 50);