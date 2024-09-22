import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from '../users/user.model';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private readonly userRepository: typeof User,
    private readonly jwtService: JwtService,
  ) {}

  async findOne(email: string): Promise<User> {
    return await this.userRepository.findOne({
      where: { email },
    });
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.findOne(email);
    if (!user) {
      throw new UnauthorizedException('Email are incorrect');
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Password are incorrect');
    }
    return user;
  }

  async login(user: User) {
    const payload = {
      login: user.login,
      email: user.email,
      id: user.id,
      avatar: user.avatar,
    };
    const token = await this.jwtService.signAsync(payload);
    return { payload: payload, access_token: token };
  }

  async createUser(createUserDto: CreateUserDto) {
    const existUser = await this.findOne(createUserDto.email);
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    if (existUser) {
      throw new BadRequestException('this email already exist');
    } else {
      const user = await this.userRepository.create({
        email: createUserDto.email,
        login: createUserDto.login,
        password: await bcrypt.hash(createUserDto.password, salt),
      });
      const payload = {
        login: user.login,
        email: user.email,
        id: user.id,
        avatar: user.avatar,
      };
      const token = await this.jwtService.signAsync(payload);
      return { payload: payload, access_token: token };
    }
  }
}
