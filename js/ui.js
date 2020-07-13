document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.sidenav');
  M.Sidenav.init(menus, {edge: 'right'});
  // add recipe form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'right'});
});
// pwa-install::part(openButton) {
//   background: grey;
// }
// $(document).ready(function() {
//   $('input#input_text, textarea#msg').characterCounter();
// });