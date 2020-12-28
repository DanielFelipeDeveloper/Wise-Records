import { Request } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';

class AuthenticateAdminService {
  public async execute(id: Request['user']['id']): Promise<boolean> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { id } });

    if (user.roles === 'admin') return true;

    return false;
  }
}

export default AuthenticateAdminService;
