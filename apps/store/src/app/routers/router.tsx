import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NxWelcome from '../nx-welcome';
import Home from '..';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NxWelcome title="Welcome Putra" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
