import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { IProduct } from '../types';

@InputType()
export class NewProductInput implements Partial<IProduct> {
  @Field()
  @IsString()
  @IsNotEmpty()
  title: string;

  @Field()
  @IsNumber()
  @Min(0)
  price: number;

  @Field(() => Int)
  @IsNumber()
  @Min(0)
  qty: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description?: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  category: string;
}
