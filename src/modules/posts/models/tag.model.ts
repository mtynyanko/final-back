import {
  Table,
  Column,
  Model,
  AllowNull,
  BelongsToMany,
} from 'sequelize-typescript';

import { Post } from 'src/modules/posts/models/post.model';
import { TagPost } from 'src/modules/posts/models/tag-post.model';

@Table({
  tableName: 'Tags',
  underscored: true,
  timestamps: true,
})
export class Tag extends Model {
  @AllowNull(false)
  @Column
  name: string;

  @BelongsToMany(() => Post, () => TagPost)
  posts: Post[];
}
