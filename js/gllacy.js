var link = document.querySelector('.feedback-button')

var popup = document.querySelector('.modal-feedback')
var overlay = document.querySelector('.modal-overlay')
var close = popup.querySelector('.modal-close')

var form = popup.querySelector('.feedback-form')
var name = popup.querySelector('[name=name]')

var email = popup.querySelector('[name=email]')
var text = popup.querySelector('[name=text]')

var isStorageSupport = true
var storage = ''

try {
    storage = localStorage.getItem('name')
} catch (err) {
    isStorageSupport = false
}

link.addEventListener('click', function(evt) {
    evt.preventDefault()
    popup.classList.add('modal-show')
    overlay.classList.add('modal-overlay-show')
    if (storage) {
        name.value = storage
            // email.focus()
    } else {
        // name.focus()
    }
})

close.addEventListener('click', function(evt) {
    evt.preventDefault()
    popup.classList.remove('modal-show')
    popup.classList.remove('modal-error')
    overlay.classList.remove('modal-overlay-show')
})
form.addEventListener('submit', function(evt) {
    if (name.value == '' || email.value == '' || text.value == '') {
        evt.preventDefault()
        popup.classList.add('modal-error')
    } else {
        if (isStorageSupport) {
            console.log(name.value)
            localStorage.setItem('name', name.value)
        }
    }
})

window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault()
        if (popup.classList.contains('modal-show')) {
            popup.classList.remove('modal-show')
            popup.classList.remove('modal-error')
            overlay.classList.remove('modal-overlay-show')
        }
    }
})