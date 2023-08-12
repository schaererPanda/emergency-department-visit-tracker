const express = require("express");
const db = require("../database/db-connector");
const router = express.Router();

router.get("/api/departments", async (req, res) => {
  const query = `
  SELECT *
  FROM EmergencyDepartments 
  `;
  const [departments] = await db.pool.query(query);
  res.json(departments);
});

router.put("/api/insertDepartment", async (req, res) => {
  const { id } = req.params;

  // const date = new Date(Date.parse(req.body.date_of_visit));

  await db.pool.query(

`INSERT INTO HospitalRegions 
(emergency_department_id, hospital_region_id, hospital_name, address, phone, capacity) 
VALUES (?, ?, ?, ?, ?, ?)`,
[id, hospital_region_id, hospital_name, address, phone, capacity ]
  )
});


module.exports = router;
