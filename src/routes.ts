import { Logger } from '@config/LoggerConfig';
import { Router } from 'express';
import { UsersController } from '@controllers/UsersController';

const router = Router();
const log = new Logger();

const usersController = new UsersController();

router.get('/', (req, res) => {
	log.info('REST request get default');
	return res.json({ message: 'Welcome to API' });
});

// USER
router.get('/users', usersController.getAll);
router.get('/users/:id', usersController.getById);
router.post('/users', usersController.save);
router.put('/users/:id', usersController.update);
router.delete('/users/:id', usersController.delete);
router.post('/users/delete-list', usersController.deleteList);
router.patch('/users/update-status/:id', usersController.updateStatus);


export default router;