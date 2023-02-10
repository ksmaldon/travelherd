import express from "express";
let viewRouter = express.Router();

import { getAllUserTrips, getSingleTrip } from "../models/view.js";

viewRouter.get("/:id", async function (req, res) {
  const result = await getAllUserTrips(req.params.id);
  console.log("view")
  return res.json({ success: true, payload: result });
});

export default viewRouter