const openDialogButton1 = document.getElementById('openDialog1');
const openDialogButton2 = document.getElementById('openDialog2');
const openDialogButton3 = document.getElementById('openDialog3');


const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');


const closeModalButton1 = document.getElementById('closeModal1');
const closeModalButton2 = document.getElementById('closeModal2');
const closeModalButton3 = document.getElementById('closeModal3');


openDialogButton1.addEventListener('click', () => {
    modal1.style.display = 'block';
});

closeModalButton1.addEventListener('click', () => {
    modal1.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal1) {
        modal1.style.display = 'none';
    }
});

openDialogButton2.addEventListener('click', () => {
  modal2.style.display = 'block';
});

closeModalButton2.addEventListener('click', () => {
  modal2.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal2) {
      modal2.style.display = 'none';
  }
});

openDialogButton3.addEventListener('click', () => {
  modal3.style.display = 'block';
});

closeModalButton3.addEventListener('click', () => {
  modal3.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal3) {
      modal3.style.display = 'none';
  }
});

// const mudaBackground = document.getElementById('post__option');
// const Background = document.getElementById('body')
// mudaBackground.addEventListener("change", function() {

// }