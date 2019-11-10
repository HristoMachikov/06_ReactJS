const postService = {
    load: function (id) {
        return fetch(`https://jsonplaceholder.typicode.com/posts${id ? `/${id}` : ""}`).then((res) => {
            return res.json()
        }).catch((myErr) => console.error(myErr));
    }
};

export default postService;