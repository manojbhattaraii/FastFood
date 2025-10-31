import express from 'express';
import { NewOrder, CancelledOrder } from '../../Controller/Web/AddOrder.controller.js';

const orderManage = express.Router();

// Create a new order
orderManage.post('/new-order', NewOrder);

// Cancel an existing order
orderManage.put('/cancel-order', CancelledOrder);

export default orderManage;
