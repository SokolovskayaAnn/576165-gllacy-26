var link = document.querySelector('.feedback-button');
var popup = document.querySelector('.modal-feedback');
var overlay = document.querySelector('.modal-overlay');

var close = popup.querySelector('.modal-close');
var form = popup.querySelector('.feedback-form');
var formNameInput = popup.querySelector('.feedback-form-name');
var formEmailInput = popup.querySelector('.feedback-form-email');
var text = popup.querySelector('.feedback-form-text');

var isStorageSupport = true;
var storage = '';

try {
    storage = localStorage.getItem('formNameInput');
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');
    overlay.classList.add('overlay-show');

    if (storage) {
        formNameInput.value = storage;
        formEmailInput.focus();
    } else {
        formNameInput.focus();
    }
});

close.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
    popup.classList.remove('modal-error');
    overlay.classList.remove('overlay-show');
});

form.addEventListener('submit', function(evt) {
    if (formNameInput.value == '' || formNameInput.value == '' || text.value == '') {
        evt.preventDefault();
        popup.classList.add('modal-error');
    } else {
        if (isStorageSupport) {
            localStorage.setItem('formNameInput', formNameInput.value);
            localStorage.setItem('formEmailInput', formEmailInput.value);
            localStorage.setItem('text', text.value);
        }
    }
});

window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains('modal-show')) {
            popup.classList.remove('modal-show');
            popup.classList.remove('modal-error');
            overlay.classList.remove('modal-overlay-show');
        }
    }
});
