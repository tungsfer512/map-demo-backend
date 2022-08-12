import ver1Router from './ver1';

const initWebRouter = (app) => {
  app.use('/v1/apis', ver1Router);
};

module.exports = initWebRouter;
