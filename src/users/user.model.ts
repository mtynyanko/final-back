import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column({
    allowNull: false,
  })
  login: string;

  @Column({
    allowNull: false,
  })
  password: string;

  @Column({
    allowNull: false,
  })
  email: string;

  @Column({
    allowNull: false,
  })
  avatar: string;

  @Column({
    allowNull: false,
    defaultValue: new Date(),
  })
  createdAt: Date;

  @Column({
    allowNull: false,
    defaultValue: new Date(),
  })
  updatedAt: Date;
}
