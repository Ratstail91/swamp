export const NEW_JUKEBOX = 'NEW_JUKEBOX';
export const SET_JUKEBOX = 'SET_JUKEBOX';
export const CLEAR_JUKEBOX = 'CLEAR_JUKEBOX';
export const CLEAR_JUKEBOX_LIST = 'CLEAR_JUKEBOX_LIST';
export const CLEAR_MAKE_JUKEBOX = 'CLEAR_MAKE_JUKEBOX';
export const CLEAR_UNMAKE_JUKEBOX = 'CLEAR_UNMAKE_JUKEBOX';

export function newJukebox(jname) {
  return {
    type: NEW_JUKEBOX,
    jukebox: jname
  };
}

export function setJukebox(jname) {
  return {
    type: SET_JUKEBOX,
    jukebox: jname
  };
}

export function clearJukebox(jname) {
  return {
    type: CLEAR_JUKEBOX,
    jukebox: jname
  };
}

export function clearJukeboxList() {
  return {
    type: CLEAR_JUKEBOX_LIST
  };
}

export function clearMakeJukebox() {
  return {
    type: CLEAR_MAKE_JUKEBOX
  };
}

export function clearUnmakeJukebox() {
  return {
    type: CLEAR_UNMAKE_JUKEBOX
  };
}
