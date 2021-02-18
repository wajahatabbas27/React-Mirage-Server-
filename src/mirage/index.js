import { createServer } from "miragejs"

export default function () {

    let arr = [{ id: "1", text: "hello" }];
    let name = [{ name: "wajahat abbas", age: "22" }];

    createServer({
        routes() {
            this.namespace = "/fakeapi"
            this.get("/getTodos", { todo: arr })           //get method to get the data from te client
            this.get("/names", { names: name })
            this.post("/addTodos", (_, req) => {            //post method taking data from client
                console.log("req", req);
                arr.push(req.requestBody);
            })
        },
    })
}