document.forms[0].addEventListener('submit', function (e) {
    if(!document.querySelector('#check').checked) {
        e.preventDefault();
        alert('Musisz zaakceptować regulamin');
        return false;
    }
});