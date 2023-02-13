import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      typePaths: ['./**/*/*.graphql'],
    }),
    ProductModule,
  ],
})
export class AppModule {}
