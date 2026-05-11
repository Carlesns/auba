import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import the TanStack Start server
const { default: server } = await import(join(__dirname, 'server.js'));

export default async function handler(req, res) {
  try {
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers.host || 'localhost';
    const url = `${protocol}://${host}${req.url}`;

    // Read body
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const body = Buffer.concat(chunks);

    // Build Web Request
    const webRequest = new Request(url, {
      method: req.method,
      headers: new Headers(
        Object.entries(req.headers)
          .filter(([, v]) => v != null)
          .map(([k, v]) => [k, Array.isArray(v) ? v.join(', ') : v])
      ),
      body: body.length > 0 && req.method !== 'GET' && req.method !== 'HEAD'
        ? body
        : undefined,
    });

    // Call TanStack Start fetch handler
    const response = await server.fetch(webRequest);

    // Send response
    res.statusCode = response.status;
    for (const [key, value] of response.headers.entries()) {
      res.setHeader(key, value);
    }

    if (response.body) {
      const reader = response.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
    }
    res.end();
  } catch (err) {
    console.error('[vercel-handler] error:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}
