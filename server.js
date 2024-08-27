const express = require('express');

server = express();

require('dotenv').config({path: "./config/.env"});

require('./database/connection')();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

const port = 1000;

const userModel = require('./database/model/user') 

server.post('/user', async (req, res) => {
    console.log(req.body);
    const user = await userModel.create(req.body);
    res.json({user})
})

server.get('/user', async (req, res) => {
    const users = await userModel.find({})
    res.json({users})
})

server.get('/user/:id', async (req, res) => {
    const { id } = req.params;
    const user = await userModel.findById(id)
    res.json({user})
})

server.put('/user/:id', async (req, res) => {
    const { id } = req.params;
    await userModel.findOneAndUpdate({_id:id}, req.body)
    const user = await userModel.findById(id)
    res.json({user})
})

server.delete('/user/:id', async (req, res) => {
    const {id} = req.params;
    const deleted = await userModel.findByIdAndDelete(id)
    res.json({deleted})
})

server.listen(port, "127.0.0.1", () => {
    console.log(`Server is running on http://localhost:${port}`);
});


