const postService = {
    load: function (id, limit) {
        return fetch(`http://localhost:9999/api/origami${id ? `/${id}` : ""}${limit ? `?limit=${limit}` : ""}`).then((res) => {
            // return fetch(`https://jsonplaceholder.typicode.com/posts${id ? `/${id}` : ""}`).then((res) => {
            return res.json()
        }).catch((myErr) => console.error(myErr));
    }
};

export default postService;