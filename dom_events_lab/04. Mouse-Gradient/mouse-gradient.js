function attachGradientEvents() {
    const resultEl = document.querySelector('#result');
    const gradientEl = document.querySelector('#gradient');

    gradientEl.addEventListener('mousemove', (e) => {
        const currPos = e.offsetX;
        const elementWidth = e.currentTarget.clientWidth;

        let percent = (currPos / elementWidth) * 100;
        percent = Math.floor(percent);
        resultEl.textContent = `${percent}%`;
    });
}
