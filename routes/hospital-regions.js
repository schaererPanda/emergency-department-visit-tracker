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
module.exports = router;
