let h2 = document.createElement('h2');
h2.textContent = "";

document.querySelector('body').appendChild(h2);

function addingEventListener() {
    const input = document.getElementById('input');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);
}

