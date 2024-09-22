import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Post } from './models/post.model';
import { User } from 'src/modules/users/user.model';
import { Tag } from 'src/modules/posts/models/tag.model';
@Injectable()
export class PostService {
  constructor(@InjectModel(Post) private readonly postModel: typeof Post) {}
  async getPosts(): Promise<Post[]> {
    return await this.postModel.findAll({
      include: [
        {
          model: User,
          attributes: ['id', 'login', 'email', 'avatar'],
        },
        {
          model: Tag,
          attributes: ['id', 'name'],
        },
      ],
      order: [['id', 'ASC']],
    });
  }
}
