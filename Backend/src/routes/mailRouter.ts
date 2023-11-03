import express from 'express';

import { sendEmail } from "../controllers/mail.controller";

const mailRouter = express.Router();

mailRouter
  .post('/confirmation', sendEmail);

export default mailRouter;