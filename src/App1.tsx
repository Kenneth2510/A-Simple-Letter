import { useState } from 'react'
import './App.css'
import { LoginPage } from './pages/Login';
import { IntroPage } from './pages/Intro';
import { PikachuPage } from './pages/PikachuPage';
import { TulipsPage } from './pages/TulipsPage';
import { PinkPage } from './pages/PInkPage';
import { EndingPage } from './pages/EndingPage';

export default function App1() {
  const [page, setPage] = useState(0);
  
  return (
    <>
      {page === 0 && <LoginPage onLogin={() => setPage(1)} />}
      {page === 1 && <IntroPage onNext={() => setPage(2)} />}
      {page === 2 && <PikachuPage onNext={() => setPage(3)} />}
      {page === 3 && <TulipsPage onNext={() => setPage(4)} />}
      {page === 4 && <PinkPage onNext={() => setPage(5)} />}
      {page === 5 && <EndingPage />}
    </>
  )
}
