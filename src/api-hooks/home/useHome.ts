import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {QUERY_KEYS} from '../query-keys';
import axios from 'axios';

export type Dog = {message: string; status: string};

export const useHome = (enabled = true): UseQueryResult<Dog> => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_HOME_DATA],
    queryFn: async () => {
      try {
        const response = await axios.get(
          'https://dog.ceo/api/breeds/image/random',
          {
            headers: {
              'Content-Type': 'application/json', // Use 'application/json' for JSON data
            },
          },
        );

        return response.data;
      } catch (error) {
        throw new Error('Failed to fetch data'); // You can handle errors as needed
      }
    },
    enabled,
  });
};
