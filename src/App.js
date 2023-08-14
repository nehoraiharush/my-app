
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Component from './Component';
import H1 from './H1';

export const APPNAME = '/my-app'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${APPNAME}/`} element={<Component />} />
        <Route path={`${APPNAME}/h1`} element={<H1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
