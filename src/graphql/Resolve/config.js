import { infoModelMutations } from '../Cache';

export const resolvers = {
  Mutation: {
    ...infoModelMutations,
  },
};
