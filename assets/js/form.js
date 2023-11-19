
const scriptURL = 'https://script.google.com/macros/s/AKfycbzB2zmCe86i7ccHQXYObasG3-BBd90AnaRyEBVCCDtCADlqFNN9H7nrkhdA15iuJKiQ/exec'
const form = document.forms['form1']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => swal("Thank You!", " We Will Contact You Soon...", "success")).catch(error => console.error('Error!', error.message))
        .then(function clearAllInputs(event) {
            var allInputs = document.querySelectorAll('input:not([type="submit"]), textarea');
            allInputs.forEach(singleInput => singleInput.value = '');
         })
})