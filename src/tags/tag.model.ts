import {
  Table,
  Column,
  Model,
  AllowNull,
  BelongsToMany,
} from 'sequelize-typescript';

import { Post } from 'src/posts/post.model';
import { TagPost } from 'src/tag-posts/tag-post.model';

@Table
export class Tag extends Model {
  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @BelongsToMany(() => Post, () => TagPost)
  @Column
  posts: Post[];

  @AllowNull(false)
  @Column({
    defaultValue: new Date(),
  })
  createdAt: Date;

  @AllowNull(false)
  @Column({
    defaultValue: new Date(),
  })
  updatedAt: Date;
}
