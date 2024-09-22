import {
  Table,
  Column,
  Model,
  AllowNull,
  ForeignKey,
} from 'sequelize-typescript';

import { Tag } from 'src/modules/posts/models/tag.model';
import { Post } from 'src/modules/posts/models/post.model';

@Table({
  tableName: 'TagsPosts',
  underscored: true,
  timestamps: true,
})
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
