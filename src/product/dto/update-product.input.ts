import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { IProduct } from '../types';
import { NewProductInput } from './new-product.input';

@InputType()
export class UpdateProductInput
  extends PartialType(NewProductInput)
  implements Partial<Omit<IProduct, 'createdOn' | 'updatedOn'>>
{
  @Field()
  @IsString()
  @IsNotEmpty()
  id: string;
}
