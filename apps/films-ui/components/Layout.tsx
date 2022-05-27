import Head from 'next/head';
import Nav from './Nav';
import { UserProvider } from '../lib/authContext';
import { NextPage } from 'next';

interface Props {
  user?: any;
  loading?: boolean;
  children?: JSX.Element;
}

const Layout: NextPage<Props> = ({ user, loading = false, children }) => (
  <UserProvider value={{ user, loading }}>
    <Head>
      <title>Film Database</title>
    </Head>

    <Nav />
    <main className="px-4">
      <div
        className="
          flex
          justify-center
          items-center
          bg-white
          mx-auto
          w-2/4
          rounded-lg
          my-16
          p-16
        "
      >
        <div className="text-2xl font-medium">{children}</div>
      </div>
    </main>
  </UserProvider>
);
export default Layout;
