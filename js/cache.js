fetch("https://raw.githubusercontent.com/", {
    method: "OPTIONS"
})
.then((resp) => console.log(resp))
.catch((err) => console.log(err))