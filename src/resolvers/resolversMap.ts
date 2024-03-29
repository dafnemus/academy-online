import { IResolvers } from '@graphql-tools/utils';
import mutation from './mutation';
import query from './query';
import type from './type';

const resolversMap: IResolvers = {
  ...query,
  ...type,
  ...mutation,
};

export default resolversMap;
