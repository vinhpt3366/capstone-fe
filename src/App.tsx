import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoadingGlobal from './features/LoadingGlobal';
import ScrollToTop from './features/ScrollToTop';
import { ToastProvider } from './providers/ToastProvider';
import { AppRouter } from './routes';
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
