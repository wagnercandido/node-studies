import { Logger } from '@config/LoggerConfig';
import { UserService } from '@service/UserService';
import { Request, Response } from 'express';
const logger = new Logger();

const service = new UserService();
class UsersController {

	async save(req: Request, res: Response) {
		logger.info('REST request to save user');
		const response = await service.save(req.body);
		return res.json(response);
	}

	async getAll(req: Request, res: Response) {
		logger.info('REST request to get all users');
		const response = await service.getAll();
		return res.json(response);
	}

	async getById(req: Request, res: Response) {
		logger.info('REST request to get a user by id', req.params.id);
		const response = await service.getById(parseInt(req.params.id));
		if (!response) {
			logger.error('User not found by id', req.params.id);
			return res.status(400).send({ message: 'User not found', status: 400 })
		}
		return res.json(response);
	}

	async update(req: Request, res: Response) {
		logger.info('REST request to update a user by id', req.params.id);
		const response = await service.update(parseInt(req.params.id), req.body);
		if (!response) {
			logger.error('User not found by id', req.params.id);
			return res.status(400).send({ message: 'User not found', status: 400 })
		}
		return res.json(response);
	}

	async delete(req: Request, res: Response) {
		logger.info('REST request to delete a user by id', req.params.id);
		const response = await service.delete(parseInt(req.params.id));
		if (!response) {
			logger.error('User not found by id', req.params.id);
			return res.status(400).send({ message: 'User not found', status: 400 })
		}
		return res.json(response);
	}

	async deleteList(req: Request, res: Response) {
		logger.info('REST request to delete a list user');
		const response = await service.deleteList(req.body.list);
		return res.json(response);
	}

	async updateStatus(req: Request, res: Response) {
		logger.info('REST request to update status user by id', req.params.id);
		const response = await service.updateStatus(parseInt(req.params.id), req.body.status);
		if (!response) {
			logger.error('User not found by id', req.params.id);
			return res.status(400).send({ message: 'User not found', status: 400 })
		}
		return res.json(response);
	}

}

export { UsersController };
