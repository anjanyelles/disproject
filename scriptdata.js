const scriptURL = 'https://script.google.com/macros/s/AKfycbxdK-599xtiOcAig3yVna2kULMc1uNvheHWzljmRxS_L8SxDT-7W6bitc7TifhrmBqV/exec';
const form = document.forms['sheetform'];

form.addEventListener('submit', e => {
  e.preventDefault();
  
  // Perform the fetch request to the Google Apps Script URL
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      // If the response is not ok, reject the promise
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Show SweetAlert on successful submission
      return Swal.fire({
        title: "Thank you!",
        text: "Your form has been submitted successfully.",
        icon: "success"
      });
    })
    .then(() => {
      // Reload the page after the SweetAlert confirmation
      window.location.reload();
    })
    .catch(error => {
      // Show a static error message on failure
      Swal.fire({
        title: "Error!",
        text: "There was an issue with your submission.",
        icon: "error"
      });
      console.error('Error!', error.message);
    });
});
