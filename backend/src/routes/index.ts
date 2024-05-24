import express from "express";
import logger from "../utils/logger";

const router = express.Router();

router.get("/", async (_: express.Request, res: express.Response) => {
  logger.info("Server is starting");
  res.status(200).json({
    status: "success",
    message: "Server is healthy",
  });
});

module.exports = router;
