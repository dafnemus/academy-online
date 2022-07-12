import { IResolvers } from '@graphql-tools/utils';

const query: IResolvers = {
  Query: {
    students(): string {
      return 'All students';
    },
  },
};

export default query;
