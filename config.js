let rootPath ="https://mysite.itvarsity.org/api/ContactBook/";   // location of the server
let apiKey = checkApiKey();

function checkApiKey() {    // sends the user to another page if their api key is not entered
    if (!localStorage.getItem("apiKey")) {
        window.open("enter-api-key.html", "_self");
    }
    return localStorage.getItem("apiKey");
}
