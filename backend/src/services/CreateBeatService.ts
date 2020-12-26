import { getRepository } from 'typeorm';

import Beat from '../models/Beat';

interface Request {
  image: string;
  audio: string;
  name: string;
  style: string;
  bpm: string;
  price: number;
}

class CreateBeatService {
  public async execute({
    image,
    audio,
    name,
    style,
    bpm,
    price,
  }: Request): Promise<Beat> {
    const beatsRepository = getRepository(Beat);

    const priceToNumber = Number(price);

    const beat = beatsRepository.create({
      name,
      image,
      style,
      bpm,
      price: priceToNumber,
      audio,
    });

    await beatsRepository.save(beat);

    return beat;
  }
}

export default CreateBeatService;
