const express = require("express");
const db = require("../database/db-connector");
const router = express.Router();

router.get("/api/physicians", async (req, res) => {
  const query = `
  SELECT *
  FROM EmergencyPhysicians 
  `;
  const [physicians] = await db.pool.query(query);
  res.json(physicians);
});

router.put("/api/insertPhysician", async (req, res) => {
  const { id } = req.params;

  // const date = new Date(Date.parse(req.body.date_of_visit));

  await db.pool.query(

`INSERT INTO HospitalRegions 
(ed_visit_physician_id, ed_visit_id, emergency_physician_id) 
VALUES (?, ?, ?)`,
[id, ed_visit_id, emergency_physician_id ]
  )
});

module.exports = router;
