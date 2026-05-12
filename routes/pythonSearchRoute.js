const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post("/", async (req, res) => {

    try {

        const response = await axios.post(
            "http://127.0.0.1:8000/search",
            {
                question: req.body.question
            }
        );

        res.json(response.data);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
});

module.exports = router;