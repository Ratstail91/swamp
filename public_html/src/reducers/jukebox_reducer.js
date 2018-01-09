import { NEW_JUKEBOX, SET_JUKEBOX, newJukebox, setJukebox } from '../actions/jukebox_actions.js';

var initialStore = {
	jukebox: '',
  jukeboxOptions: [
    {
      key: 'new',
      value: 'new',
      text: 'New Jukebox',
      icon: 'add'
    }
  ]
};

export default function reducer(store = initialStore, action) {
  //copy store to newStore
  var newStore = JSON.parse(JSON.stringify(store));
  var found = false;

  newStore.jukeboxOptions.map((v) => {
    if (v.key == action.jukebox) {
      found = true;
    }
    return v;
  });

  //determine action
  switch(action.type) {
    case NEW_JUKEBOX:
      //action.jukebox must not exist in jukeboxOptions
      if (found === true) {
        return store;
      }

      //add to the list of jukeboxes
      newStore.jukeboxOptions.unshift({
        key: action.jukebox,
        value: action.jukebox,
        text: action.jukebox
      });

      //set the new jukebox
      newStore.jukebox = action.jukebox;

      return newStore;

    case SET_JUKEBOX:
      //action.jukebox must already exist in jukeboxOptions
      if (found === false) {
        return store;
      }

      //set the jukebox
      newStore.jukebox = action.jukebox;

      return newStore;

    default:
      return store;
  }
};
