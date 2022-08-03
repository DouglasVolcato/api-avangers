const express = require("express");
const app = express();

let avengers = require("./mocks/avengers");

app.get("/", (req, resp) => {

    resp.send(avengers);

})

app.get("/avenger/:id", (req, resp) => {

    const id = req.params.id;
    let avengerFound = "";

    for (let n of avengers) {
        if (Number(id) === Number(n.id)){
            avengerFound = n;
            break
        }
    }

    if (avengerFound){
        resp.send(avengerFound);
    } else {
        resp.send("Avenger not found :(")
    }

})

app.listen(110, () => {
    console.log("App running at port 110");
    console.log("Access at http://localhost:110/");
})