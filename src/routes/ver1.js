import express from 'express';

import Ver1Controller from '../controllers/ver1/Ver1Controller';

let ver1Router = express.Router();

ver1Router.get('/users', Ver1Controller.getAllUser);

module.exports = ver1Router;
