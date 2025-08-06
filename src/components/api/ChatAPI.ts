import axios from "axios";

export const askGPT = async (prompt: string): Promise<string> => {
  try {
    const res = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
      {
        contents: [
          {
            parts: [
              {
                text: prompt
              }
            ]
          }
        ]
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Server error:", error);
    return "The local AI server tripped and fell. Try again later.";
  }
};
