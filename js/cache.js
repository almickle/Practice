fetch("https://api.ncbi.nlm.nih.gov/datasets/v2alpha", {
    method: "OPTIONS"
})
.then((resp) => console.log(resp))
.catch((err) => console.log(err))