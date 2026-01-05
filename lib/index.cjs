import express from 'express';
import { createServer } from 'node:http';
import { join } from 'node:path';
import { uvPath } from '@titaniumnetwork-dev/ultraviolet';

const app = express();
const server = createServer(app);
const port = process.env.PORT || 8080;

// Serve your frontend files (the index.html you made)
app.use(express.static(join(process.cwd(), 'public')));

// Serve Ultraviolet's internal scripts
app.use('/uv/', express.static(uvPath));

app.get('/', (req, res) => {
    res.sendFile(join(process.cwd(), 'public', 'index.html'));
});

server.listen(port, () => {
    console.log(`Sigma Unblocker is live on port ${port}`);
});
