import { InputType, PickType } from '@nestjs/graphql';
import { UpdateProductInput } from './update-product.input';

@InputType()
export class DeleteProductInput extends PickType(UpdateProductInput, ['id']) {}
