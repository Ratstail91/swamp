import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import io from 'socket.io-client';
import JukeboxSelectorPanel from '../panels/jukebox_selector_panel.jsx';
import SongSelectorPanel from '../panels/song_selector_panel.jsx';
import * as jukeboxActions from '../actions/jukebox_actions.js';

class PageMusic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: io.connect('swamp.krgamestudios.com:3001')
    };

    //jukebox list handler
    this.state.socket.on('jukebox list', (msg) => {
      var rooms = JSON.parse(msg);

      this.props.clearJukeboxList();

      for (var room in rooms) {
        this.props.newJukebox(rooms[room]);
      }
    });

    //jukebox room handler
    this.state.socket.on('jukebox join', (msg) => {
      this.props.setJukebox(msg);
    });

    //request the jukebox list
    this.state.socket.emit('jukebox list');
    this.state.socket.emit('jukebox join which');
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.makeJukebox !== '') {
      //TODO: send the new jukebox info to the server
      this.props.clearMakeJukebox();
    }

    if (this.props.unmakeJukebox !== '') {
      //TODO: send the delete jukebox info to the server
      this.props.clearUnmakeJukebox();
    }
    if (this.props.jukebox !== nextProps.jukebox) {
      //TODO: update song list
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
  jukeboxOptions: PropTypes.array.isRequired,
  makeJukebox: PropTypes.string.isRequired,
  unmakeJukebox: PropTypes.string.isRequired,

  newJukebox: PropTypes.func.isRequired,
  setJukebox: PropTypes.func.isRequired,
  clearJukebox: PropTypes.func.isRequired,
  clearJukeboxList: PropTypes.func.isRequired,
  clearMakeJukebox: PropTypes.func.isRequired,
  clearUnmakeJukebox: PropTypes.func.isRequired
}

function mapStoreToProps(store) {
  return {
    jukebox: store.jukebox,
    jukeboxOptions: store.jukeboxOptions,
    makeJukebox: store.makeJukebox,
    unmakeJukebox: store.unmakeJukebox
  };
}

function mapDispatchToProps(dispatch) {
  return {
    newJukebox: (j) => { dispatch(jukeboxActions.newJukebox(j)); },
    setJukebox: (j) => { dispatch(jukeboxActions.setJukebox(j)); },
    clearJukebox: (j) => { dispatch(jukeboxActions.clearJukebox(j)); },
    clearJukeboxList: () => { dispatch(jukeboxActions.clearJukeboxList()); },
    clearMakeJukebox: () => { dispatch(jukeboxActions.clearMakeJukebox()); },
    clearUnmakeJukebox: () => { dispatch(jukeboxActions.clearUnmakeJukebox()); }
  };
}

PageMusic = connect(mapStoreToProps, mapDispatchToProps)(PageMusic);

export default PageMusic;
