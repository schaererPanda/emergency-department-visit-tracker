const express = require("express");
const db = require("../database/db-connector");
const router = express.Router();

router.get("/api/regions", async (req, res) => {
  const query = `
  SELECT *
  FROM EmergencyRegions 
  `;
  const [regions] = await db.pool.query(query);
  res.json(regions);
});

router.put("/api/submit_region", async (req, res) => {
    const { id } = req.params;
  
    // const date = new Date(Date.parse(req.body.date_of_visit));
  
    await db.pool.query(

  `INSERT INTO HospitalRegions (hospital_region_id, county_name, geographical_region_served) 
  VALUES (?, ?, ? )`,
  [id, county_name, geographical_region_served ]
    )
  })


module.exports = router;