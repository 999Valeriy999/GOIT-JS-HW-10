// Опис у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

// Обробоник подій submit форми
form.addEventListener('submit', event => {
  event.preventDefault();

  // Отримання значень із форми
  const delay = parseInt(form.elements.delay.value, 10);
  const state = form.elements.state.value;

  // Очистка значень у полі введення delay
  form.elements.delay.value = '';

  // Створення й обрабка проміса
  const snackbarPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  snackbarPromise
    .then(delay => {
      // Виведення повідомлення про успішне виконання
      iziToast.success({
        title: 'Fulfilled promise',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      // Виведення повідомлення про невдале виконання
      iziToast.error({
        title: 'Rejected promise',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
});
