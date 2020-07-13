// Check that service workers are supported
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('service worker registered'))
    .catch(err => console.log('service worker not registered', err));
  });
}

document.getElementById("phone").value="+91"
function submitm() {

    const phone = document.getElementById("phone");
    const msg = document.getElementById("msg");

    const anchor = document.createElement("a");
    anchor.href = "https://wa.me/" + phone.value.replace(/\D/g,'') + "?text=" + encodeURI(msg.value);
    anchor.click();
}