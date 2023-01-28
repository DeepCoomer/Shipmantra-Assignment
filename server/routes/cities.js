import express from "express";
import { createRequire } from "module";
import {
  calculateDistance,
  calculateThreePointDistance,
} from "../utils/calculateDistance.js";

const router = express.Router();
const require = createRequire(import.meta.url);

// Route 1:

router.get("/calculatecost", async (req, res) => {
  try {
    const cities = require("../data/citiesData.json");
    const citiesArray = Object.keys(cities);

    if (
      !citiesArray.includes(req.query.start) ||
      !citiesArray.includes(req.query.end)
    ) {
      return res
        .status(404)
        .json({ status: 404, errorMessage: "City name wrong!!" });
    }

    const startcity = req.query.start;
    const endcity = req.query.end;

    let middlecity;
    let distance;
    let cost;
    let response;

    if (req.query.middle) {
      middlecity = req.query.middle;
    }

    const x1 = Object.values(cities[startcity])[0];
    const y1 = Object.values(cities[startcity])[1];
    const x2 = Object.values(cities[endcity])[0];
    const y2 = Object.values(cities[endcity])[1];

    if (middlecity) {
      if (citiesArray.includes(middlecity)) {
        const x3 = Object.values(cities[middlecity])[0];
        const y3 = Object.values(cities[middlecity])[1];
        distance = calculateThreePointDistance(x1, y1, x2, y2, x3, y3);
        cost = distance * 10000;

        response = {
          status: 200,
          startcity: req.query.start,
          middlecity: req.query.middle,
          endcity: req.query.end,
          totaldistance: distance,
          "cost in paise": cost,
        };

        return res.status(200).json(response);
      } else {
        return res
          .status(404)
          .json({ status: 404, errorMessage: "Middle city name wrong!!" });
      }
    } else {
      distance = calculateDistance(x1, y1, x2, y2);
      cost = distance * 10000;

      response = {
        status: 200,
        startcity: req.query.start,
        endcity: req.query.end,
        totaldistance: distance,
        costinpaise: cost,
      };

      return res.status(200).json(response);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error");
  }
});

export default router;
