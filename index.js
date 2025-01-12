let count = 0;
let countEl = document.getElementById('count-el');

function increment() {
  count++;
  countEl.textContent = count;
}

function save() {
  console.log(count);
}
