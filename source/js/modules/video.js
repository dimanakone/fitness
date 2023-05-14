const play = document.querySelector('.video__play');
const iframe = document.querySelector('.video__iframe');

const onPlayVideoClick = () => {
  if (play && iframe) {
    play.addEventListener('click', () => {
      play.style.display = 'none';
      iframe.style.display = 'block';
    });
  }
};

export {onPlayVideoClick};
