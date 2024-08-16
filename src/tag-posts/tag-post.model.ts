import {
  Table,
  Column,
  Model,
  AllowNull,
  ForeignKey,
} from 'sequelize-typescript';

import { Tag } from 'src/tags/tag.model';
import { Post } from 'src/posts/post.model';

@Table
export class TagPost extends Model {
  @AllowNull(false)
  @ForeignKey(() => Post)
  @Column
  postId: number;

  @AllowNull(false)
  @ForeignKey(() => Tag)
  @Column
  tagId: number;
}
