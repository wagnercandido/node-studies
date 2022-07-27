import { Log } from '@config/LogConfig';
import express from 'express';

const app = express();
const log = new Log();

app.use(express.json());

app.get('/', (req, res) => {
	const message = `Route get${req.query.name ? ' with params => ' + req.query.name : ''}`;
	return res.json({ message });
});
app.post('/', (req, res) => {
	const { name } = req.body;
	return res.json({ message: 'Route post => ' + name });
});
app.get('/:id', (req, res) => {
	const { id } = req.params;
	return res.json({ message: 'Route get by id => ' + id });
});
app.put('/:id', (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	return res.json({ message: `Route put by id => ${id} and name => ${name}` });
});
app.delete('/:id', (req, res) => {
	const { id } = req.params;
	return res.json({ message: `Route delete by id => ${id}` });
});

app.listen(3333, () => { log.info('Started App') });
