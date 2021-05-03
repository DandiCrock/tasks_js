const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const items = document.querySelector('#items');
const computedStyles = getComputedStyle(items);

let displacementRight = 0;

rightBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let displacementRight = parseInt(computedStyles.right)

  if (displacementRight < 500) {
    items.style.right = `${displacementRight + 100}px`;   // непонятные ковычки и зачем доллар?
  }
});


leftBtn.addEventListener('click', e => {
  e.preventDefault();
  let displacementRight = parseInt(computedStyles.right)

  if (displacementRight > 0) {
    items.style.right = `${displacementRight - 100}px`;   
  }
})