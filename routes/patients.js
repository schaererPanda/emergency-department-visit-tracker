const express = require("express");
const db = require("../database/db-connector");
const router = express.Router();

router.get("/api/patients", async (req, res) => {
  const query = `
  SELECT *
  FROM EmergencyPatients 
  `;
  const [patients] = await db.pool.query(query);
  res.json(patients);
});

router.put("/api/patients/:id", async (req, res) => {
    const { id } = req.params;
  
    // const date = new Date(Date.parse(req.body.date_of_visit));
  
    await db.pool.query(
      `
      UPDATE Patients
      SET
        name = ?,
        age = ?,
        race = ?,
        sex = ?
        address = ?
        phone = ?
      WHERE
        patient_id = ?;
    `,
      [
        req.body.name,
        req.body.age,
        req.body.race,
        req.body.sex,
        req.body.address,
        req.body.phone,
        id,
      ]
    );
  
    // await db.pool.query(
    //   `
    //   DELETE FROM EDVisitPhysicians WHERE ed_visit_id = ?
    // `,
    //   [id]
    // );
  
    for (const ed_visit_physician_id of req.body.ed_visit_physician_ids) {
      await db.pool.query(
        `
        INSERT INTO EDVisitPhysicians(ed_visit_id, emergency_physician_id)
        VALUES(?, ?)
      `,
        [id, ed_visit_physician_id]
      );
    }
  
    res.json({ message: "Visit updated successfully!" });
  });

  router.put("/api/insertPatients", async (req, res) => {
    const { id } = req.params;
  
    // const date = new Date(Date.parse(req.body.date_of_visit));
  
    await db.pool.query(

  `INSERT INTO Patients (patient_id, name, age, race, sex, address, phone) 
  VALUES (?, ?, ?, ?, ?, ?)`,
  [id, name, age, race, sex, address, phone ]
    )
  });


  
  module.exports = router;