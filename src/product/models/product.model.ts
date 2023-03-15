import { Field, ID, Int, Float, ObjectType } from '@nestjs/graphql';
import { IProduct } from '../types';

@ObjectType({ description: 'product' })
export class Product implements IProduct {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  qty: number;

  @Field({ nullable: true })
  description: string;

  @Field()
  category: string;

  @Field()
  createdOn: Date;

  @Field()
  updatedOn: Date;
}
