import Layout from '../components/Layout';
import { useFetchUser } from '../lib/authContext';

const Series = () => {
  const { user } = useFetchUser();

  return (
    <Layout user={user}>
      <div>Series</div>
    </Layout>
  );
};

export default Series;
