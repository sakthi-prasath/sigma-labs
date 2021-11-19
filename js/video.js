
const video = document.getElementById('movieScreen');
video.pause();
AFRAME.registerComponent('listener', {
  tick: function () {
    const userPosition = this.el.getAttribute('position')["z"];

    if (userPosition <= -15) {
      video.play();
    } else {
      video.pause();
    }
  }
});

const enterButton = document.querySelector('.splash__button')
const splash = document.querySelector('.splash');

enterButton.addEventListener('click', () => {
  video.play();
  video.pause();
  splash.style.display = 'none';
});
