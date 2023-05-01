const genreateJoks = async () => {
    try {
        const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
        },
        });
        const data = await response.json();
        jokeEl.innerHTML = data.joke;
    } catch (error) {
        console.log("The error is", error);
    }
    };

    export default genreateJoks;