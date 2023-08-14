const express = require("express");
const db = require("../database/db-connector");
const router = express.Router();

router.get("/api/emergency-physicians", async (req, res) => {
  const [physicians] = await db.pool.query(
    `
    SELECT *
    FROM EmergencyPhysicians;
    `
  );

  res.json(physicians);
});

router.post("/api/emergency-physicians", async (req, res) => {
  const name = req.body.name;
  const credential = req.body.credential;
  await db.pool.query(
    `
    INSERT INTO EmergencyPhysicians (
      name,
      credential
    )
    VALUES (
      ?, ?
    );
    `,
    [name, credential]
  );

  res.json({ message: "Emergency Physicians created successfully!" });
});

module.exports = router;
