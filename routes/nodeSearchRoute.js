const express = require("express");
const router = express.Router();

const analyzeSentiment = require("../services/transformerService");

router.post("/", async (req, res) => {
  try {
    const text = req.body.text;

    const result = await analyzeSentiment(text);

    console.log(result)

    res.json({
      input: text,
      sentiment: result
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;