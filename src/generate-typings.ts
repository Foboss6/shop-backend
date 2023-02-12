import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const defFactory = new GraphQLDefinitionsFactory();
defFactory.generate({
  typePaths: ['./src/**/*.graphql'],
  path: join(process.cwd(), 'src/graphql.ts'),
  outputAs: 'class',
});
