const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

app.post("/api/chat", (req, res) => {
  const prompt = req.body.prompt;

  // ✨ Mock response logic
  let response;
  if (prompt.toLowerCase().includes("weather")) {
    response = "It's sunny and ironic outside.";
  } else if (prompt.toLowerCase().includes("joke")) {
    response =
      "Why did the async function break up with the promise? Too many unresolved issues.";
  } else {
    response = `You said: "${prompt}", and I'm pretending to be insightful.`;
  }

  res.json({ reply: response });
});

app.listen(PORT, () => {
  console.log(`Mock AI server running on http://localhost:${PORT}`);
});
