//connect & disconnect events happen server-side automatically
import socket from 'socket.io-client';
var io = socket.connect('localhost:3001');

export const getJukeboxList = function() {
  //
}

export const getSongList = function(jukebox) {
  //
}

export const playSong = function(jukebox, songname) {
  //
}

export const togglePause = function(jukebox) {
  //
}

export const createJukebox = function(name) {
  //
}

export const deleteJukebox = function(jukebox) {
  //
}

export const createSong = function(jukebox, songname) {
  //TODO: how?
}

export const deleteSong = function(jukebox, songname) {
  //
}
