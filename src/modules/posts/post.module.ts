import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Post } from 'src/modules/posts/models/post.model';
import { PostController } from 'src/modules/posts/post.controller';
import { PostService } from 'src/modules/posts/post.service';

@Module({
  imports: [SequelizeModule.forFeature([Post])],
  controllers: [PostController],
  providers: [PostService],
  exports: [PostService],
})
export class PostModule {}
