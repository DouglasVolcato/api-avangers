const express = require("express");
const app = express();

let avangers = require("./mocks/avangers");

app.get("/", (req, resp) => {

    resp.send(avangers);

})

app.get("/avanger/:id", (req, resp) => {

    const id = req.params.id;
    let avangerFound = "";

    for (let n of avangers) {
        if (Number(id) === Number(n.id)){
            avangerFound = n;
            break
        }
    }

    if (avangerFound){
        resp.send(avangerFound);
    } else {
        resp.send("Avanger not found :(")
    }

})

app.listen(111, () => {
    console.log("App running at port 111");
    console.log("Access at http://localhost:111/");
})