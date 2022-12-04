fetch("https://raw.githubusercontent.com/almickle/Graphics/main/ref/teapot.txt", {
    method: "OPTIONS"
})
.then((resp) => console.log(resp))
.catch((err) => console.log(err))