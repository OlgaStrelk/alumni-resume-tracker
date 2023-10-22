import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './pages/Search/Search.tsx';
import Favourites from './pages/Favourites/Favourites.tsx';
import Vacancies from './pages/Vacancies/Vacancies.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/search" element={<Search />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/search" element={<Vacancies />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
