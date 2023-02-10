import { create } from "domain";
import express from "express";
let createRouter= express.Router();

import { createNewTrip } from "../models/create.js";

createRouter.post("/", async function (req, res){
    const result = await createNewTrip(req.body)
    return res.json({ success: true, payload: result })

})



export default createRouter