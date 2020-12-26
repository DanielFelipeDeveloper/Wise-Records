import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import CreateBeatService from '../services/CreateBeatService';

const upload = multer(uploadConfig);

const beatsRouter = Router();

beatsRouter.post('/', upload.any(), async (request, response) => {
  try {
    const { name, style, bpm, price } = request.body;
    let image = '';
    let audio = '';

    const createBeat = new CreateBeatService();

    const requestFiles = request.files as Express.Multer.File[];

    const filesPath = requestFiles.map(file => {
      return { field: file.fieldname, path: file.filename };
    });

    filesPath.filter(file => {
      if (file.field === 'image') {
        image = file.path;
      } else if (file.field === 'audio') {
        audio = file.path;
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
});

export default beatsRouter;
