import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const tmpAvatarFolder = path.resolve(__dirname, '..', '..', 'tmp', 'avatar');
const tmpBeatFolder = path.resolve(__dirname, '..', '..', 'tmp', 'image');
const tmpAudioFolder = path.resolve(__dirname, '..', '..', 'tmp', 'audio');

export default {
  directory: tmpAvatarFolder,
  imageBeatDirectory: tmpBeatFolder,
  audioBeatDirectory: tmpAudioFolder,

  storage: multer.diskStorage({
    destination: (request, file, callback) => {
      callback(
        null,
        path.resolve(__dirname, '..', '..', 'tmp', file.fieldname),
      );
    },
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');

      const filename = `${fileHash}-${file.originalname}`;

      callback(null, filename);
    },
  }),
};
