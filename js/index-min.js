var link=document.querySelector(".btn-search"),popup=document.querySelector(".search-form"),datearrival=popup.querySelector("[name=arrival]"),datedeparture=popup.querySelector("[name=departure]"),adults=popup.querySelector("[name=adults]"),children=popup.querySelector("[name=children]"),isStorageSupport=!0,storageAdults="",storageChildren="";try{storageAdults=localStorage.getItem("adults"),storageChildren=localStorage.getItem("children")}catch(e){isStorageSupport=!1}popup.classList.add("modal-hidden"),link.addEventListener("click",function(e){e.preventDefault(),popup.classList.toggle("modal-show"),popup.classList.remove("modal-error"),datearrival.focus(),storageAdults&&(adults.value=storageAdults),storageChildren&&(children.value=storageChildren)}),popup.addEventListener("submit",function(e){datearrival.value&&datedeparture.value&&adults.value&&children.value?isStorageSupport&&(localStorage.setItem("adults",adults.value),localStorage.setItem("children",children.value)):(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error")))});
