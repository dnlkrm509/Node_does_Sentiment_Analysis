const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post("/", async (req, res) => {

    try {

        const response = await axios.post(
            "https://python-rag-semantic-search-pdf.onrender.com/search",
            {
                question: req.body.question
            },
            {
                timeout: 120000
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