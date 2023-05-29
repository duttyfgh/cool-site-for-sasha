import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/Header/Header';
import News from './components/news/news/news';
import PageNotFound from './components/pageNotFound/pageNotFound';
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
              <Route path='/cool-site-for-sasha' element={<StartPage />} />
              <Route path='/news' element={<News />} />

              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App;
