(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-pagination-open]'),
      closeModalBtn: document.querySelector('[modal-pagination-close]'),
    
    modal: document.querySelector('[modal-pagination]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// const textInput = document.querySelector("#pagination-input");
// textInput.addEventListener("submit", onInputChange);

// function onInputChange(event) {
//   if (event.currentTarget.value === "") {
//   textInput.textContent = "Введіть номер сторінки для переходу";
//   } else {
//    textInput.textContent = event.currentTarget.value;
//   }
// }
