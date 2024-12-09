function attachEvents() {
    // Posts - http://localhost:3030/jsonstore/blog/posts
    // Comments - http://localhost:3030/jsonstore/blog/comments

    const baseUrl = 'http://localhost:3030/jsonstore/blog';

    const selectPosts = document.querySelector('#posts');

    const postTitleEl = document.querySelector('#post-title');
    const postBodyEl = document.querySelector('#post-body');
    const postCommentsEl = document.querySelector('#post-comments');

    document
        .querySelector('#btnLoadPosts')
        .addEventListener('click', loadHandler);
    document
        .querySelector('#btnViewPost')
        .addEventListener('click', viewHandler);

    function loadHandler(e) {
        selectPosts.innerHTML = '';

        fetch(baseUrl + '/posts')
            .then((res) => res.json())
            .then((posts) => {
                Object.values(posts).forEach((post) => {
                    const newOptEl = document.createElement('option');
                    newOptEl.textContent = post.title;

                    Object.assign(newOptEl.dataset, post);
                    /* here we are mapping the post object to the dataset
                    of the option it is equivelent to
                    newOptEl.dataset.title = post.title
                    and so on */

                    selectPosts.appendChild(newOptEl);
                });
            })
            .catch((err) => console.error(err));
    }

    function viewHandler(e) {
        fetch(baseUrl + '/comments')
            .then((res) => res.json())
            .then((comments) => {
                const selectedOption =
                    selectPosts.querySelector('option:checked');

                postTitleEl.textContent = selectedOption.dataset.title;
                postBodyEl.textContent = selectedOption.dataset.body;

                Object.values(comments).forEach((comment) => {
                    if (comment.postId === selectedOption.dataset.id) {
                        const commentEl = document.createElement('li');
                        commentEl.textContent = comment.text;
                        postCommentsEl.appendChild(commentEl);
                    }
                });
            });
    }
}

attachEvents();
