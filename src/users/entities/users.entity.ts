import { BaseEntity } from 'src/shared/entities';
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { IUser } from '../types';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity implements IUser {
  @PrimaryColumn({ unique: true, readonly: true })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: 'timestamp', nullable: true })
  dayOfBirth: Date;
}
