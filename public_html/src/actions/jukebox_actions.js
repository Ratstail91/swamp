export const NEW_JUKEBOX = 'NEW_JUKEBOX';
export const SET_JUKEBOX = 'SET_JUKEBOX';

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
