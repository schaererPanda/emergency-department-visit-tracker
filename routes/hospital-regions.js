const express = require("express");
const db = require("../database/db-connector");
const router = express.Router();

router.get("/api/hospital-regions", async (req, res) => {
  const [regions] = await db.pool.query(
    `
    SELECT *
    FROM HospitalRegions;
    `
  );

  res.json(regions);
});

router.post("/api/hospital-regions", async (req, res) => {
  const countyName = req.body.county_name;
  const geographicalRegionServed = req.body.geographical_region_served;
  await db.pool.query(
    `
      INSERT INTO EDVisits (
        county_name,
        geographical_region_served
      )
    VALUES (
        ?, ?
      );
    `,
    [countyName, geographicalRegionServed]
  );

  res.json({ message: "Region created successfully!" });
});

module.exports = router;
