import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './routes';
import ScrollToTop from './features/ScrollToTop';
import { ToastProvider } from './providers/ToastProvider';
import LoadingGlobal from './features/LoadingGlobal';
const SUSPENSE_FALLBACK = null;
const ROUTER_BASENAME = '/';

function App() {
  return (
    <Suspense fallback={SUSPENSE_FALLBACK}>
      <Router basename={ROUTER_BASENAME}>
        <AppRouter />
        <ScrollToTop />
        <ToastProvider />
        <LoadingGlobal />
      </Router>
    </Suspense>
  );
}

export default App;
