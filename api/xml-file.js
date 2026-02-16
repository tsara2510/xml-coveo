// Vercel serverless function to serve XML with custom headers
export default function handler(req, res) {
  // Sample XML content
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<catalog>
  <book id="bk101">
    <author>Gambardella, Matthew</author>
    <title>XML Developer's Guide</title>
    <genre>Computer</genre>
    <price>44.95</price>
    <publish_date>2000-10-01</publish_date>
    <description>An in-depth look at creating applications with XML.</description>
  </book>
  <book id="bk102">
    <author>Ralls, Kim</author>
    <title>Midnight Rain</title>
    <genre>Fantasy</genre>
    <price>5.95</price>
    <publish_date>2000-12-16</publish_date>
    <description>A former architect battles corporate zombies.</description>
  </book>
</catalog>`;

  // Set custom headers
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('X-Custom-Header', 'MyCustomValue');
  res.setHeader('Access-Control-Allow-Origin', '*'); // CORS if needed
  res.setHeader('Cache-Control', 's-maxage=86400'); // Cache for 24 hours
  
  // Send XML response
  res.status(200).send(xmlContent);
}
