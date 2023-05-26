import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import StartPage from './components/StartPage/StartPage';

function App() {
  return (
    <BrowserRouter>
      <div className='main'>
        <Header />
        <div className='mainContent'>
          <Suspense fallback={<div>Loading..</div>}>
            <Routes>
              <Route path='/' element={<Navigate to={'/cool-site-for-sasha'} />} />
              <Route path='*' element={<div>404 PAGE NOT FOUND</div>} />
              <Route path='/cool-site-for-sasha' element={<StartPage />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App;
