import {
  NEW_JUKEBOX,
  SET_JUKEBOX,
  CLEAR_JUKEBOX,
  CLEAR_JUKEBOX_LIST,
  CLEAR_MAKE_JUKEBOX,
  CLEAR_UNMAKE_JUKEBOX
} from '../actions/jukebox_actions.js';

var initialStore = {
  jukebox: '',
  jukeboxOptions: [
    {
      key: 'new',
      value: 'new',
      text: 'New Jukebox',
      icon: 'add'
    }
  ],
  makeJukebox: '',
  unmakeJukebox: ''
};

export default function reducer(store = initialStore, action) {
  //copy store to newStore
  var newStore = JSON.parse(JSON.stringify(store));
  var found = false;

  //does the action's jukebox exist?
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

      //signal that a new jukebox is needed
      newStore.makeJukebox = action.jukebox;

      return newStore;

    case SET_JUKEBOX:
      //action.jukebox must already exist in jukeboxOptions
      if (found === false) {
        return store;
      }

      //set the jukebox
      newStore.jukebox = action.jukebox;

      return newStore;

    case CLEAR_JUKEBOX:
      //action.jukebox must already exist in jukeboxOptions
      if (found === false) {
        return store;
      }

      //remove the indicated element
      newStore.jukeboxOptions = newStore.jukeboxOptions.filter(e => {
        return e.key === 'new' || e.key !== action.jukebox;
      });

      //clear the selection if necessary
      if (newStore.jukebox === action.jukebox) {
        newStore.jukebox = '';
      }

      //signal that a jukebox deletion is needed
      newStore.unmakeJukebox = action.jukebox;

      return newStore;

    case CLEAR_JUKEBOX_LIST:
      //simply drop the list
      newStore.jukeboxOptions = initialStore.jukeboxOptions;
      newStore.jukebox = '';
      return newStore;

    case CLEAR_MAKE_JUKEBOX:
      newStore.makeJukebox = '';
      return newStore;

    case CLEAR_UNMAKE_JUKEBOX:
      newStore.unmakeJukebox = '';
      return newStore;

    default:
      return store;
  }
};
