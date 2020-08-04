import express from 'express';
import SessionController from './controllers/SessionController';
import ConnectionController from './controllers/ConnectionsController';
const routes = express.Router();

const sessionController = new SessionController();
const connectionController = new ConnectionController();

routes.get('/sessions', sessionController.index);
routes.post('/sessions', sessionController.create);
routes.get('/connections', connectionController.index);
routes.post('/connections', connectionController.create);

export default routes;
