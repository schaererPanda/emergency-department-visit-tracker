const express = require("express");
const db = require("../database/db-connector");
const router = express.Router();

router.get("/api/treatments", async (req, res) => {
  const query = `
  SELECT *
  FROM Treatments 
  `;
  const [treatments] = await db.pool.query(query);
  res.json(treatments);
});

router.post("/api/treatments", async (req, res) => {
  const { treatment_id, treatment_name } = req.body;

  await db.pool.query(
    `
      INSERT INTO Treatments (
        treatment_id,
        treatment_name
      )
    VALUES (
        ?, ?
      );
    `,
    [treatment_id, treatment_name]
  );

  res.json({ message: "Treatment created successfully!" });
});

router.delete("/api/treatments/:treatment_id", async (req, res) => {
  const { treatment_id } = req.params;

  await db.pool.query(
    `
      DELETE FROM Treatments
      WHERE treatment_id = ?;
    `,
    [treatment_id]
  );

  res.json({ message: "Treatment deleted successfully!" });
});

module.exports = router;
