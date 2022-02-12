import axios from 'axios';

export default function getDataOptions() {
  axios({
    method: 'post',
    url: 'http://localhost:4000/graphql',
    data: {
      query: `query {
        getAllItems {
          name
          description
          ownerId
          complete
        }
      }`,
    },
  })
    .then((res) => {
      const data = res.data.data.getAllItems;
      console.log('res.data.data', res.data.data.getAllItems);
    })
    .catch((error) => {
      console.log(error);
    });
}
