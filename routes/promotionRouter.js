const express = require("express");
const bodyParser = require("body-parser");

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the promotion to you!");
  })
  .post((req, res, next) => {
    res.end(
      `Will add the promotion ${req.body.name} with details ${req.body.description} `
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT is not suported on /promotion");
  })
  .delete((req, res, next) => {
    res.end("Deleting all the promotion");
  });
promotionRouter
  .route("/:promotionID")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end(`Will send details of ${req.params.promotionID} to you!`);
  })
  .put((req, res, next) => {
    res.write(`Updating the details of ${req.params.promotionID} \n`);
    res.end(
      `Will update the promotion ${req.body.name} with details ${req.body.description}`
    );
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(`POST is not supported on /promotion/${req.params.promotionID}`);
  })
  .delete((req, res, next) => {
    res.end(`Deleting promotion: ${req.params.promotionID}`);
  });

module.exports = promotionRouter;
