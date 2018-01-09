import React from 'react';
import { Dropdown } from 'semantic-ui-react';

class JukeboxSelectorPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      options: [
        {
          key: 'Kingdom Hearts',
          value: 'Kingdom Hearts',
          text: 'Kingdom Hearts'
        },
        {
          key: 'Cast World',
          value: 'Cast World',
          text: 'Cast World'
        },
        {
          key: 'Made in Abyss',
          value: 'Made in Abyss',
          text: 'Made in Abyss'
        },
        {
          key: 'New',
          value: 'new',
          text: 'New Jukebox',
          icon: 'add'
        }
      ]
    }
  }

  myChange(event, data) {
    if (data.value === 'new') {
      //get the new name
      var name = prompt('New jukebox name:');

      //empty
      if (name === null) {
        return;
      }

      //append the new name to the list
      var tmpOptions = JSON.parse(JSON.stringify(this.state.options));
      tmpOptions.unshift({
        key: name,
        value: name,
        text: name
      });
      this.setState({
        options: tmpOptions
      });

      //point to the new name
      this.setState({
        value: name
      });
    }
    else {
      //point to the selection
      this.setState({
        value: data.value
      });
    }
  }

  render() {
    return (
      <Dropdown
        onChange={(e, d) => { this.myChange(e, d);}}
        placeholder='Select Jukebox'
        search
        selection
        options={this.state.options}
        value={this.state.value}
      />
    );
  };
}

export default JukeboxSelectorPanel;
