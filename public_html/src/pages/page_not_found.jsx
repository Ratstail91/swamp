import React from 'react';
import { Link } from 'react-router-dom';

class PageNotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <div class='page'>
        <h1>404 - Page Not Found</h1>
        <Link to='/'>Return Home</Link>
      </div>
    );
  };
}

export default PageNotFound;
