import ReactDOM from 'react-dom/client';
// import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ErrorBoundary from './Features/ErrorBoundaries/ErrorBoundaries.Layout';
import Navigation from './Navigation/Navigation.Layout';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <ErrorBoundary>
      <Navigation />
    </ErrorBoundary>
  </>,
);
