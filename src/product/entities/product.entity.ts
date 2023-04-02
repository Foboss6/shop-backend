import { BaseEntity } from 'src/shared/entities';
import { Column, Entity } from 'typeorm';
import { IProduct } from '../types';

@Entity('products')
export class ProductEntity extends BaseEntity implements IProduct {
  @Column()
  title: string;

  @Column({ type: 'float' })
  price: number;

  @Column({ type: 'int' })
  qty: number;

  @Column({ nullable: true, default: null })
  description: string;

  @Column({ nullable: true, default: null })
  category: string;
}
