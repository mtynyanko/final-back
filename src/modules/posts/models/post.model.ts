import {
  Table,
  Column,
  Model,
  AllowNull,
  BelongsToMany,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';

import { TagPost } from 'src/modules/posts/models/tag-post.model';
import { Tag } from 'src/modules/posts/models/tag.model';
import { User } from 'src/modules/users/user.model';

@Table({
  tableName: 'Posts',
  underscored: true,
  timestamps: true,
})
export class Post extends Model {
  @AllowNull(false)
  @Column
  header: string;

  @AllowNull(false)
  @Column
  content: string;

  @AllowNull(false)
  @Column
  imageUrl: string;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column
  authorId: number;

  @BelongsTo(() => User)
  author: User;

  @BelongsToMany(() => Tag, () => TagPost)
  tags: Tag[];
}
