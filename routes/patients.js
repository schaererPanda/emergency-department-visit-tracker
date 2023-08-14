const express = require("express");
const db = require("../database/db-connector");
const router = express.Router();

router.get("/api/patients", async (req, res) => {
  const [patients] = await db.pool.query(
    `
    SELECT *
    FROM Patients;
    `
  );

  res.json(patients);
});

router.post("/api/patients", async (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const race = req.body.race;
  const sex = req.body.sex;
  const address = req.body.address;
  const phone = req.body.phone;

  await db.pool.query(
    `
      INSERT INTO Patients (
        name, age, race, sex, address, phone
      )
    VALUES (
        ?, ?, ?, ?, ?, ?
      );
    `,
    [name, age, race, sex, address, phone]
  );

  res.json({ message: "Patient created successfully!" });
});

module.exports = router;
