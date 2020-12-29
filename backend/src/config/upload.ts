import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const tmpAvatarFolder = path.resolve(__dirname, '..', '..', 'tmp', 'avatar');

export default {
  directory: tmpAvatarFolder,

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
