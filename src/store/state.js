import {playMode} from 'common/js/config'

const state = {
  singer: {},
  playing: false,
  fullscreen: false,
  playList: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1
}

export default state
