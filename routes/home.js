import { Router } from 'express';

const userRoute = Router();

userRoute.put('/products', (req, res) => {
  res.send({ "success": true });
}
);