import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import { newJukebox, setJukebox } from '../actions/jukebox_actions.js';

class JukeboxSelectorPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  myChange(event, data) {
    if (data.value === 'new') {
      //get the new name
      var name = prompt('New jukebox name:');

      //empty
      if (name === null) {
        return;
      }

      //create and set the new jukebox
      this.props.newJukebox(name);
    }
    else {
      //set an old jukebox
      this.props.setJukebox(data.value);
    }
  }

  render() {
    return (
      <Dropdown
        onChange={(e, d) => { this.myChange(e, d);}}
        placeholder='Select Jukebox'
        search
        selection
        selectOnBlur={false}
        options={this.props.jukeboxOptions}
        value={this.props.jukebox}
      />
    );
  };
}

JukeboxSelectorPanel.propTypes = {
  jukebox: PropTypes.string.isRequired,
  jukeboxOptions: PropTypes.array.isRequired
};

function mapStoreToProps(store) {
  return {
    jukebox: store.jukebox,
    jukeboxOptions: store.jukeboxOptions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    newJukebox: (value) => { dispatch(newJukebox(value)); },
    setJukebox: (value) => { dispatch(setJukebox(value)); }
  };
}

JukeboxSelectorPanel = connect(mapStoreToProps, mapDispatchToProps)(JukeboxSelectorPanel);

export default JukeboxSelectorPanel;
