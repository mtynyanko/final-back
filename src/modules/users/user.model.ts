import { Table, Column, Model, AllowNull } from 'sequelize-typescript';

@Table({
  tableName: 'Users',
  underscored: true,
  timestamps: true,
})
export class User extends Model {
  @AllowNull(false)
  @Column
  login: string;

  @AllowNull(false)
  @Column
  password: string;

  @AllowNull(false)
  @Column({
    validate: {
      isEmail: true,
    },
  })
  email: string;

  @AllowNull(true)
  @Column
  avatar: string;
}
