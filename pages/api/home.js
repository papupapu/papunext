import axios from 'axios';

const homeAPI = 'https://run.mocky.io/v3/c8d00c0b-021d-4bbe-90ff-bdbc631e579d';

export default async (req, res) => {
  const getData = (apiuri) => {
    const apiRes = axios.get(apiuri).then((r) => r.data);
    return apiRes;
  };
  const data = await getData(homeAPI);
  res.statusCode = 200;
  res.json(data);
};
