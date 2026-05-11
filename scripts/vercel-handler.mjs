import server from './server.js';

export default async function handler(req, res) {
  try {
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers.host || 'localhost';
    const url = `${protocol}://${host}${req.url}`;

    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const body = Buffer.concat(chunks);

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

    const response = await server.fetch(webRequest);

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
    res.end('Internal Server Error: ' + err.message);
  }
}
