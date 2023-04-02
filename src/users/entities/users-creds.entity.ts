import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { IUserCred } from '../types';

@Entity({ name: 'users' })
export class UserCredEntity implements IUserCred {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @PrimaryColumn({ unique: true, readonly: true })
  email: string;

  @Column()
  hash: string;

  @Column()
  refreshToken: string;

  @Column()
  accessToken: string;
}
