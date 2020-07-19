// Check that service workers are supported
// if ('serviceWorker' in navigator) {
//   // Use the window load event to keep the page load performant
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/sw.js')
//     .then(reg => console.log('service worker registered'))
//     .catch(err => console.log('service worker not registered', err));
//   });
// }

function submitm() {

    const phone = document.getElementById("phone");
    const msg = document.getElementById("msg");

    const anchor = document.createElement("a");
    anchor.href = "https://wa.me/" + phone.value.replace(/\D/g,'') + "?text=" + encodeURI(msg.value);
    anchor.click();
}

function submittl() {

  const user = document.getElementById("user");
  // const msg = document.getElementById("msg");

  const anchor = document.createElement("a");
  anchor.href = "https://t.me/" + user.value; //+ "?text=" + encodeURI(msg.value);
  anchor.click();
}

function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}

function generate() {
  // var glink=document.getElementById("glink").style.display;
  var link=document.getElementById("link");
  const user = document.getElementById("tittle");
  const dpn = document.getElementById("dpn");
  const fd = document.getElementById("fromdate").value.replace(/-|:/g,'')+"00Z";
  const td = document.getElementById("todate").value.replace(/-|:/g,'')+"00Z";
  // console.log(td.value.replace(/-|:/g,''));
  // console.log(fd.value.toString())
  var date="&dates="+fd+"/"+td;
  var text="&text="+encodeURIComponent(tittle.value);
  var details="&details="+encodeURIComponent(dpn.value);
  // console.log(date)
  document.getElementById("glink").classList.remove("hide");
  link.innerHTML="https://calendar.google.com/calendar/render?action=TEMPLATE"+text+date+details;
  copyTextToClipboard(link.value);
  // glink="block";
  

}
