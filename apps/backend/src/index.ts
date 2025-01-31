import { multiply } from '@repo/math';
import express from 'express';

const app = express();
const port = 7979;

app.get('/', (req, res) => {
	res.send(`Hello World! ${multiply(138, 0.5)}`);
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
