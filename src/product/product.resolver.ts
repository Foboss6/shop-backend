import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './models';
import { DeleteProductInput, NewProductInput, UpdateProductInput } from './dto';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [Product], { name: 'getAllProducts' })
  async getAllProducts(): Promise<Product[]> {
    return this.productService.getAllProducts();
  }

  @Mutation(() => Product, { name: 'createProduct' })
  createProduct(@Args('input') product: NewProductInput) {
    return this.productService.createProduct(product);
  }

  @Mutation(() => Product, { name: 'updateProduct' })
  updateProduct(@Args('input') product: UpdateProductInput) {
    return this.productService.updateProduct(product);
  }

  @Mutation(() => Boolean, { name: 'deleteProduct' })
  deleteProduct(@Args('input') product: DeleteProductInput) {
    return this.productService.deleteProduct(product);
  }
}
