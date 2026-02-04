export default async function handler(req, res) {
  try {
    const { category = "general" } = req.query;

    const apiKey = process.env.VITE_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "API Key missing" });
    }

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    return res.status(200).json(data);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}
