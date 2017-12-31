import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//include other panels
import PageNotFound from './pages/page_not_found.jsx';

import FooterPanel from './panels/footer_panel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class='page'>
        <BrowserRouter>
          <Switch>
            <Route path='*' component={PageNotFound} />
          </Switch>
        </BrowserRouter>
        <FooterPanel />
      </div>
    );
  }
}

export default App;
