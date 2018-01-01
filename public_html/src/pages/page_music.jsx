import React from 'react';
import { Link } from 'react-router-dom';
import * as socketeer from '../socketeer';

class PageMusic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    //TODO: request the file list
  };

  render() {
    return (
      <div className='page'>
        <h1>Music</h1>
      </div>
    );
  };
}

export default PageMusic;
