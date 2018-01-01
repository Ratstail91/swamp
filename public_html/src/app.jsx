import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//include other panels
import PageNotFound from './pages/page_not_found.jsx';
import PageMusic from './pages/page_music.jsx';

import FooterPanel from './panels/footer_panel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='page'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={PageMusic} />
            <Route path='*' component={PageNotFound} />
          </Switch>
        </BrowserRouter>
        <FooterPanel />
      </div>
    );
  }
}

export default App;
