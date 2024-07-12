export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`hero-columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('hero-columns-img-col');
        }
      }
    });
  });

  if (block.children.length == 2) {
    const bgColor = block.children[1].children[1].innerText.trim();
    if (bgColor) {
      if (block.classList.contains('magenta') || block.classList.contains('black')) {
        block.classList.remove('magenta');
        block.classList.remove('black');
      }
      if (block.parentElement.classList.contains('magenta') || block.parentElement.classList.contains('black')) {
        block.parentElement.classList.remove('magenta');
        block.parentElement.classList.remove('black');
      }

      block.classList.add(bkColor.toLowerCase());
      block.parentElement.classList.add(bkColor.toLowerCase());
    }
    block.children[1].remove();
  }
}
