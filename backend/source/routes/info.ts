
import express from 'express';
import controller from '../controllers/info';
const router = express.Router();

router.get('/price/:type/:discount', controller.getPrice);

export = router;


