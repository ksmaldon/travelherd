import express from "express";
let joinRouter = express.Router();

import  {joinTrip, getTripID}from "../models/join.js";

joinRouter.post("/", async function (req, res) {
  const result = await joinTrip(req.body);
  return res.json({ success: true, payload: result });
});

joinRouter.get("/:id", async function(req,res){
     const result = await getTripID(req.params.id);
     return res.json({ success: true, payload: result });

})

export default joinRouter