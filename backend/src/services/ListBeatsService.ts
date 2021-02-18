import { getRepository } from 'typeorm';

import Beat from '../models/Beat';

class ListBeatsService {
  public async execute(): Promise<Beat[]> {
    const beatsRepository = getRepository(Beat);

    const beats = beatsRepository.find();

    if (!beats) throw new Error('Beats not found!');

    return beats;
  }
}

export default ListBeatsService;
