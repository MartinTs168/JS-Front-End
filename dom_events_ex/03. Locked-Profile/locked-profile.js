document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const mainBody = document.querySelector('main');

    function showHiddenInfo(event) {
        console.log('tag is ' + event.target.tagName);
        if (event.target.tagName != 'BUTTON') {
            return;
        }
        event.preventDefault();

        const radioLockedEl =
            event.target.parentElement.querySelector('.radio-group')
                .children[1];
        console.log(radioLockedEl.checked);
        const hiddenInfo =
            event.target.parentElement.querySelector('.hidden-fields');
        if (!radioLockedEl.checked) {
            hiddenInfo.classList.remove('active');
        } else {
            hiddenInfo.classList.add('active');
        }
    }

    mainBody.addEventListener('click', showHiddenInfo);
}
