import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';
import { NewProduct } from 'src/graphql';

export class ProductDto extends NewProduct {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsNumber()
  @Min(0)
  qty: number;

  @IsString()
  @IsNotEmpty()
  description?: string;

  @IsString()
  @IsNotEmpty()
  category?: string;
}
