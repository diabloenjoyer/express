import express from "express";

export const indexRouter = express.Router();

indexRouter.route("/").get((req, res) => res.json("hey"));
