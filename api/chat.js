
module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Use POST" });
  }

  const message = req.body?.message;

  if (typeof message !== "string" ||
      !message.trim() ||
      message.length > 4000) {
    return res.status(400).json({
      error: "Enter a message under 4000 characters."
    });
  }

  try {
    const response = await fetch(
      models/gemini-3.5-flash-lite:generateContent
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY
        },
        body: JSON.stringify({
          contents: [{
            role: "user",
            parts: [{ text: message.trim() }]
          }]
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini error:", response.status);
      return res.status(502).json({
        error: "Gemini request failed. Check your API configuration."
      });
    }

    const answer = data.candidates?.[0]?.content?.parts
      ?.map(part => part.text || "")
      .join("") || "No answer returned.";

    return res.status(200).json({ answer });
  } catch {
    return res.status(500).json({
      error: "Could not connect to Gemini."
    });
  }
};
