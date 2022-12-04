const headers = {
    "Host": "*",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-us,en;q=0.5",
    "Accept-Encoding": "gzip,deflate",
    "Connection": "keep-alive",
    "Origin": "https://almickle.github.io/Practice/",
    "Access-Control-Request-Method": "POST",
    "Access-Control-Request-Headers": "X-PINGOTHER, Content-Type"
}

fetch("https://api.ncbi.nlm.nih.gov/datasets/v2alpha", {
    method: "OPTIONS",
    headers: headers
})
.then((resp) => console.log(resp))
.catch((err) => console.log(err))