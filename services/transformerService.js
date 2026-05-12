const { InferenceClient } = require("@huggingface/inference");
const dotenv = require('dotenv')

dotenv.config()

const client = new InferenceClient(process.env.HF_API_KEY);

async function analyzeSentiment(text) {
  const result = await client.textClassification({
    model: "cardiffnlp/twitter-roberta-base-sentiment-latest",
    inputs: text,
  });

  return result;
}

module.exports = analyzeSentiment;