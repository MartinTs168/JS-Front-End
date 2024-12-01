document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const profiles = document.querySelectorAll('.profile');

    function showHiddenInfo(event) {
        event.preventDefault();
        console.log('tag is ' + event.target.tagName);
        if (
            event.target``.tagName != 'BUTTON' &&
            event.target.tagName != 'INPUT'
        ) {
            return;
        }

        const radioLockedEl =
            event.target.parentElement.querySelector('.radio-group')
                .children[1];
        console.log(radioLockedEl.checked);
        if (!radioLockedEl.checked) {
            const hiddenInfo =
                event.target.parentElement.querySelector('.hidden-fields');
            hiddenInfo.classList.remove('active');
        }
    }

    profiles.forEach((profile) => {
        profile.addEventListener('click', showHiddenInfo);
    });
}
