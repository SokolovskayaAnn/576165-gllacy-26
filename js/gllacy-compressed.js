var link=document.querySelector(".feedback-button"),popup=document.querySelector(".modal-feedback"),overlay=document.querySelector(".modal-overlay"),close=popup.querySelector(".modal-close"),form=popup.querySelector(".feedback-form"),name=popup.querySelector("[name=name]"),email=popup.querySelector("[name=email]"),text=popup.querySelector("[name=text]"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("name")}catch(e){isStorageSupport=!1}link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),overlay.classList.add("modal-overlay-show"),storage&&(name.value=storage)}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error"),overlay.classList.remove("modal-overlay-show")}),form.addEventListener("submit",function(e){""==name.value||""==email.value||""==text.value?(e.preventDefault(),popup.classList.add("modal-error")):isStorageSupport&&(console.log(name.value),localStorage.setItem("name",name.value))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error"),overlay.classList.remove("modal-overlay-show")))});