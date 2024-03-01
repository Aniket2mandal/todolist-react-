import express from "express";
import Todo from "./todomodel.js";
import cors from "cors";//used to change the port
const app = express();
app.use(express.json());//LET YOU READ JSON FROM REQUEST.BODY
app.use(cors());

const PORT = 8000;
app.listen(PORT, () => {
    console.log("app is running on port");
});
app.get("/", (req, res) => {
    res.json({ message: "hello" });
});

app.get("/todos", async (req, res) => {
    const todos = await Todo.findAll();// findAll(),SELECT ALL FROM DATA
    res.json(todos);
});

// IT WILL INSERT DATA
app.post("/todos", async (req, res) => {
    try {
        const name = req.body.name;
        const status = req.body.status;
        const todos = await Todo.create({
            name: name,
            task_status: status,
        });
        return res.json(todos);
    } catch (e) {
        console.log(e);
        res.json({ error: e });
    }
});

// IT WILL SELECT DATA

// findAll(),SELECT ALL FROM DATA
app.get("/todos/:id", async (req, res) => {
    const id = req.params.id;
    const todos = await Todo.findOne({
        where: {
            id: id,
        },
    });
    res.json(todos);
});

// IT WILL UPDATE DATA
app.put("/todos/:id", async (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const status = req.body.status;
    const todos = await Todo.update({

        name: name,
        task_status: status
    }, {
        where: {
            id: id,
        },
    });
    res.json(todos);
});
app.delete("/todos/:id", async (req, res) => {
    const id = req.params.id;

    const todos = await Todo.destroy({

        where: {
            id: id,
        },
    });
    res.json(todos);
});


