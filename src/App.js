
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Component from './Component';
import H1 from './H1';
import H2 from './H2';

export const APPNAME = '/my-app'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${APPNAME}/`} element={<Component />} />
        <Route path={`${APPNAME}/h1`} element={<H1 />} />
        <Route path={`${APPNAME}/h2`} element={<H2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
