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
    modal1.classList.add('active');
});

closeModalButton1.addEventListener('click', () => {
    modal1.style.display = 'none';
    modal1.classList.remove('active');
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

// // Referências aos elementos
// const openModalButton = document.getElementById('openDialog1');
// const modalBackground = document.getElementById('modal1');
// const modal = document.getElementById('modal2');

// // Função para abrir o diálogo
// function openModal() {
//   modal.showModal();
//   modalBackground.classList.add('active');
// }

// // Evento de clique no botão para abrir o diálogo
// openModalButton.addEventListener('click', openModal);

// // Evento de clique no botão de fechar diálogo
// modal.addEventListener('close', () => {
//   modalBackground.classList.remove('active');
// });
