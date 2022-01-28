import { useQuery } from 'urql';

export const helloQuery = `
  query SayHello{ 
    hello {
    }
  }`;
