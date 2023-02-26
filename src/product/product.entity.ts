import { Product } from 'src/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ProductEntity extends Product {
  @PrimaryColumn({ unique: true })
  id: string;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  qty: number;

  @Column({ nullable: true, default: null })
  description: string;

  @Column({ nullable: true, default: null })
  category: string;
}
