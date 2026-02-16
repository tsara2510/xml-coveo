# XML Server on Vercel

A simple Node.js serverless function that serves XML files with custom headers on Vercel.

## Project Structure

```
.
├── api/
│   └── xml-file.js      # Serverless function endpoint
├── package.json         # Node.js dependencies
├── vercel.json         # Vercel configuration
└── README.md           # This file
```

## Setup & Deployment

### 1. Create a GitHub Repository

```bash
git init
git add .
git commit -m "Initial commit: XML server"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2. Deploy to Vercel

**Option A: Using Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your GitHub repository
5. Click "Deploy"

**Option B: Using Vercel CLI**
```bash
npm install -g vercel
vercel login
vercel
```

### 3. Access Your XML Endpoint

After deployment, your XML will be available at:
```
https://your-project.vercel.app/api/xml-file
```

## Custom Headers

The endpoint sets the following headers:
- `Content-Type: application/xml; charset=utf-8`
- `X-Custom-Header: MyCustomValue`
- `Access-Control-Allow-Origin: *` (CORS enabled)
- `Cache-Control: s-maxage=86400` (24-hour cache)

## Customization

### Change XML Content
Edit `api/xml-file.js` and modify the `xmlContent` variable.

### Add More Headers
Add additional `res.setHeader()` calls in the handler function:

```javascript
res.setHeader('X-Another-Header', 'value');
```

### Load XML from File
If you want to load XML from a separate file:

1. Create `data/sample.xml`
2. Modify `api/xml-file.js`:

```javascript
import { readFileSync } from 'fs';
import { join } from 'path';

export default function handler(req, res) {
  const xmlPath = join(process.cwd(), 'data', 'sample.xml');
  const xmlContent = readFileSync(xmlPath, 'utf-8');
  
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.status(200).send(xmlContent);
}
```

## Local Development

```bash
# Install Vercel CLI
npm install -g vercel

# Run locally
vercel dev
```

Visit `http://localhost:3000/api/xml-file`

## Environment Variables

If you need environment variables:

1. Create `.env` file locally (add to `.gitignore`)
2. Add to Vercel Dashboard: Settings → Environment Variables
3. Access in code: `process.env.YOUR_VARIABLE`

## Testing

Test your endpoint:

```bash
curl -i https://your-project.vercel.app/api/xml-file
```

You should see the custom headers in the response.
