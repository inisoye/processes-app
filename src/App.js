import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import AuthenticatedApp from './apps/AuthenticatedApp';
import UnauthenticatedApp from './apps/UnauthenticatedApp';

const queryClient = new QueryClient();

function App() {
  // Use isAuthenticated placeholder before auth service is ready
  const isAuthenticated = true;

  return isAuthenticated ? (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AuthenticatedApp />
      </Router>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  ) : (
    <UnauthenticatedApp />
  );
}

export default App;
