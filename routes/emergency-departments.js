const express = require("express");
const db = require("../database/db-connector");
const router = express.Router();

router.get("/api/emergency-departments", async (req, res) => {
  const [departments] = await db.pool.query(
    `
    SELECT *
    FROM EmergencyDepartments;
    `
  );

  res.json(departments);
});

router.post("/api/emergency-departments", async (req, res) => {
  const hospitalRegionID = req.body.hospital_region_id;
  const hospitalName = req.body.hospital_name;
  const address = req.body.address;
  const phone = req.body.phone;
  const capacity = req.body.capacity;
  await db.pool.query(
    `
      INSERT INTO EmergencyDepartments (
        hospital_region_id,
        hospital_name,
        address,
        phone,
        capacity
      )
    VALUES (
        ?, ?, ?, ?, ?
      );
    `,
    [hospitalRegionID, hospitalName, address, phone, capacity]
  );

  res.json({ message: "Emergency Department created successfully!" });
});

module.exports = router;
