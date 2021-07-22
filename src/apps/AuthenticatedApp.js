import { Switch, Route, Redirect } from 'react-router-dom';

import Processes from '../pages/Processes';
import CreateProcess from '../pages/CreateProcess';
import NotFound from '../pages/NotFound';

function AuthenticatedApp() {
  return (
    <>
      <Switch>
        <Route path="/processes">
          <Processes />
        </Route>

        <Route path="/create-process">
          <CreateProcess />
        </Route>

        <Route path="/">
          <Redirect to="/processes" />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Switch>
    </>
  );
}

export default AuthenticatedApp;
