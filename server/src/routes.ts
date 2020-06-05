import express from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/PointsControllers';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.post('/points', upload.single('image'), pointsController.create);

export default routes;

// {
// 	"name": "Mercado do Hérick",
// 	"email": "contato@imperatriz.com.br",
// 	"whatsapp": "66987654321",
// 	"latitude": -46.81273,
// 	"longitude": -35.191235,
// 	"city": "Barra do Garças",
// 	"uf": "MT",
// 	"items": [
// 		1,
// 		2,
// 		6
// 	]
// }