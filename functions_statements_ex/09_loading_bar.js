function loadingBar(num) {
    const loadBar = `[${'%'.repeat(num / 10)}${'.'.repeat(10 - num / 10)}]`;
    if (num === 100) {
        console.log(num + '% Complete!\n' + loadBar);
    } else {
        console.log(num + '% ' + loadBar + '\nStill loading...');
    }
}

// loadingBar(30);
// loadingBar(50);
// loadingBar(100);
