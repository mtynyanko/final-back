import {
  Table,
  Column,
  Model,
  AllowNull,
  HasMany,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';

import { Tag } from 'src/tags/tag.model';
import { User } from 'src/users/user.model';

@Table
export class Post extends Model {
  @AllowNull(false)
  @Column
  header: string;

  @AllowNull(false)
  @Column
  content: string;

  @AllowNull(false)
  @Column
  imageURL: string;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column
  authorId: number;

  @AllowNull(false)
  @BelongsTo(() => User)
  @Column
  author: User;

  @AllowNull(false)
  @HasMany(() => Tag)
  @Column
  tags: Tag[];

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
