import {Resolvers} from '../../models/resolvers-types.model';

const UserResolvers: Resolvers = {
  GenerateTokens: {
    __resolveReference: (review) => {
      return review;
    },
  },
  VerifyToken: {
    __resolveReference: async (ref) => {
      return ref;
    },
  },
};

export default UserResolvers;
