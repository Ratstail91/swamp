import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import JukeboxSelectorPanel from '../panels/jukebox_selector_panel.jsx';
import SongSelectorPanel from '../panels/song_selector_panel.jsx';

class PageMusic extends React.Component {
  constructor(props) {
    super(props);
    //TODO: request the jukebox list
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.jukebox !== nextProps.jukebox) {
      alert('CHANGE'); //TODO: update song list
    }
  }

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

PageMusic.propTypes = {
  jukebox: PropTypes.string.isRequired,
  jukeboxOptions: PropTypes.array
}

function mapStoreToProps(store) {
  return {
    jukebox: store.jukebox,
    jukeboxOptions: store.jukeboxOptions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //
  };
}

PageMusic = connect(mapStoreToProps, mapDispatchToProps)(PageMusic);

export default PageMusic;
