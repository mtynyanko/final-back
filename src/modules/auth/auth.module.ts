import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PassportModule } from '@nestjs/passport';

import { User } from '../users/user.model';
import { UserModule } from '../users/user.module';
import { JwtStrategy } from '../jwt/strategies/jwt.strategy';
import { LocalStrategy } from '../jwt/strategies/local.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MyJwtModule } from '../jwt/jwt.module';

@Module({
  imports: [
    UserModule,
    SequelizeModule.forFeature([User]),
    PassportModule,
    MyJwtModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
