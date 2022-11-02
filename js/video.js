let video = document.querySelector('#player1')

window.addEventListener('load', function () {
  console.log('Good job opening the window')
  video.autoplay = false
})

document.querySelector('#play').addEventListener('click', function () {
  console.log('Keypress: Play Video')
  document.querySelector('#volume').innerHTML = video.volume*100 + '%';
  video.play()
})

document.querySelector('#pause').addEventListener('click', function () {
  console.log('Keypress: Pause Video')
  video.pause()
})

let a = 10
document.querySelector('#slower').addEventListener('click', function () {
  console.log('Keypress: Slow Down Video')
  video.playbackRate = --a / 10
  console.log('Current Playback Rate', video.playbackRate)
})

document.querySelector('#faster').addEventListener('click', function () {
  console.log('Keypress: Slow Down Video')
  video.playbackRate = ++a / 10
  console.log('Current Playback Rate', video.playbackRate)
})

document.querySelector('#skip').addEventListener('click', function () {
  console.log('Keypress: Skip Ahead')
  video.currentTime += 10
  console.log('Current Playback Time', video.currentTime)
})

document.querySelector('#mute').addEventListener('click', function () {
  console.log('Keypress: Skip Ahead')
  if (video.muted) {
    video.muted = false 
    document.querySelector('#mute').innerHTML = 'Mute'
  } else {
    video.muted = true
    document.querySelector('#mute').innerHTML = 'Unmute'
  }
  console.log('Current Playback Muted?', video.muted)
  console.log('Current Playback Volume', video.volume*100)
})
