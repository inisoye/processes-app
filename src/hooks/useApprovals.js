import { useQuery } from 'react-query';
import axios from 'axios';

const testUrl = 'http://localhost:3001/approvals';
// const url = 'https://cemcscoop.com/approval/api/Item';

const getApprovals = async () => {
  const { data } = await axios.get(testUrl);
  return data;
};

export default function useApprovals() {
  return useQuery('approvals', getApprovals);
}
