const headers = {
    "Host": "*",
    "Origin": "https://almickle.github.io/Practice/",
    "Access-Control-Request-Method": "HEAD",
    "Access-Control-Request-Headers": "Content-Length"
}

fetch("https://api.ncbi.nlm.nih.gov/datasets/v2alpha", {
    method: "OPTIONS",
    headers: headers
})
.then((resp) => console.log(resp))

console.log('updated')