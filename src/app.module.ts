import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { User } from './modules/users/user.model';
import { Tag } from './modules/posts/models/tag.model';
import { Post } from './modules/posts/models/post.model';
import { TagPost } from './modules/posts/models/tag-post.model';
import { PostModule } from './modules/posts/post.module';
import { UserModule } from './modules/users/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: configService.get('DB_DIALECT'),
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        database: configService.get('DB_DATABASE'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        models: [User, Tag, Post, TagPost],
        synchronize: false,
      }),
    }),
    PostModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
