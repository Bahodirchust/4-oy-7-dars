const heading = document.querySelector(".title");
let offset = 0;

function inc() {
  // if (offset === 10) {
  //   audio.play();
  // }
  // if (offset === 10000) {
  //   audio.pause();
  // }
  if (offset < 10) {
    offset++;
  } else if (offset < 100) {
    offset += 10;
  } else if (offset < 1000) {
    offset += 100;
  } else if (offset < 10000) {
    offset += 1000;
  } else {
    return null;
  }

  heading.innerHTML = offset;
}
function dec() {
  if (offset > 0) {
    offset--;
    heading.innerHTML = offset;
  }
}
