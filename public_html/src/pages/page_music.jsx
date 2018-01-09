import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import JukeboxSelectorPanel from '../panels/jukebox_selector_panel.jsx';
import SongSelectorPanel from '../panels/song_selector_panel.jsx';

class PageMusic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    //TODO: request the file list
  };

  render() {
    return (
      <div className='page'>
        <Header as='h1' textAlign='center'>Internet Jukebox</Header>
        <JukeboxSelectorPanel />
        <SongSelectorPanel />
      </div>
    );
  };
}

export default PageMusic;
