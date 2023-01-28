import express from "express";
import { createRequire } from "module";

const router = express.Router();
const require = createRequire(import.meta.url);

// Route 1: Get Shipper info

router.get("/data", async (req, res) => {
  try {
    const shippers = require("../data/shippersData.json");

    const cities = ["mumbai", "bangalore", "chennai", "vizag"];

    if (!req.query.city || !cities.includes(req.query.city)) {
      return res
        .status(400)
        .json({ status: 400, errorMessage: "Please enter a valid city!!." });
    }

    const response = [];

    for (let index = 0; index < shippers.length; index++) {
      const shipper = shippers[index];
      let avctys = shipper.availableCities;

      if (avctys.includes(req.query.city)) {
        response.push({
          shipper: shipper.shipperId,
          rating: shipper.rating,
        });
      }
    }
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error.");
  }
});

export default router;
