import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import CreateBeatService from '../services/CreateBeatService';

import ensureAdminAuthenticated from '../middlewares/ensureAdminAuthenticated';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const upload = multer(uploadConfig);

const beatsRouter = Router();

beatsRouter.post(
  '/',
  ensureAuthenticated,
  ensureAdminAuthenticated,
  upload.any(),
  async (request, response) => {
    try {
      if (request.user.roles !== 'admin')
        return response.status(401).json('User is not an admin');

      const { name, style, bpm, price } = request.body;
      let image = '';
      let audio = '';

      const createBeat = new CreateBeatService();

      const requestFiles = request.files as Express.Multer.File[];

      const filesPath = requestFiles.map(file => {
        return { type: file.mimetype, path: file.filename };
      });

      filesPath.filter(file => {
        if (file.type.includes('image')) {
          image = file.path;
        } else if (file.type.includes('audio')) {
          audio = file.path;
        } else {
          return response
            .status(400)
            .json('type of file extension other than audio or image');
        }
        return true;
      });

      const beat = await createBeat.execute({
        name,
        image,
        style,
        bpm,
        price,
        audio,
      });

      return response.status(201).json(beat);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  },
);

export default beatsRouter;
