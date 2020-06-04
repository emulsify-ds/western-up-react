// This js will grab the src of an image inside a parent element with the data
//   attribute`[data-responsive-background-image]` and set that as the
//   background - image src of the parent element(with the data attribute.)
// There is accompanying css that hides the original img element so that images
//   are only displayed once.
// This level of responsiveness is not possible with css alone.

class ResponsiveBackgroundImage {
  constructor(element) {
    this.element = element;
    this.img = element.querySelector('img');
    this.src = '';

    this.img.addEventListener('load', () => {
      this.update();
    });

    if (this.img.complete) {
      this.update();
    }
  }

  update() {
    const src =
      typeof this.img.currentSrc !== 'undefined'
        ? this.img.currentSrc
        : this.img.src;

    if (this.src !== src) {
      this.src = src;
      this.element.style.backgroundImage = `url("${this.src}")`;
    }
  }
}

const elements = document.querySelectorAll(
  '[data-responsive-background-image]',
);
const backgroundImages = [];

for (let i = 0; i < elements.length; i += 1) {
  backgroundImages.push(new ResponsiveBackgroundImage(elements[i]));
}
