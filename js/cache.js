const headers = {
    "Host": "https://api.ncbi.nlm.nih.gov/datasets/v2alpha/gene/symbol/BRCA2/taxon/human",
    "Origin": "https://almickle.github.io/Practice/",
    "Access-Control-Request-Method": "HEAD",
    "Access-Control-Request-Headers": "Content-Length"
}

fetch("https://api.ncbi.nlm.nih.gov/datasets/v2alpha/gene/symbol/BRCA2/taxon/human", {
    method: "OPTIONS",
    headers: headers
})
.then((resp) => console.log(resp))
.catch()

fetch("https://api.ncbi.nlm.nih.gov/datasets/v2alpha/gene/symbol/BRCA2/taxon/human")
.then((resp) => resp.json())
.then((data) => console.log(data))

fetch("https://api.ncbi.nlm.nih.gov/datasets/v2alpha/gene/symbol/BRCA2/taxon/human", {
    method: "HEAD"
})
.then((resp) => console.log(resp))