// eslint-disable-next-line @typescript-eslint/no-unused-vars
import '../styles.scss';
import { ChakraProvider } from '@chakra-ui/react';
import Routers from './routers/router';

export function App() {
  return (
    <ChakraProvider>
      <div className="w-[100px] h-[100px] text-red-500 bg-slate-600">Fort</div>
      <Routers />
      <div />
      <video>
        <source></source>
      </video>
    </ChakraProvider>
  );
}

export default App;
