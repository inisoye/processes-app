import { useQuery } from 'react-query';
import axios from 'axios';

const testUrl = 'http://localhost:3001/processes';
// const url = 'https://cemcscoop.com/approval/api/Item';

const getProcesses = async () => {
  const { data } = await axios.get(testUrl);
  return data;
};

export default function useProcesses() {
  return useQuery('processes', getProcesses);
}
