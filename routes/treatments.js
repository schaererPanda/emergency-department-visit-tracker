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

router.put("/api/submit_treatment", async (req, res) => {
  const { id } = req.params;

  // const date = new Date(Date.parse(req.body.date_of_visit));

  await db.pool.query(

`INSERT INTO Treatments 
(treatment_id, treatment_name) 
VALUES (?, ? )`,
[id, treatment_name ]
  )
});


module.exports = router;
