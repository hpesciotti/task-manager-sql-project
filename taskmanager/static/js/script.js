
document.addEventListener('DOMContentLoaded', function() {
    // Sidenav Initialization Materialize
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // Date Picker Initialization Materialize
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {done: "Select"} // Internacionalização (software internationalization)
        
    });

    // Dropdown Select Initialization Materialize
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects)
  });