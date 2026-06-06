
const form = document.querySelector("#eventForm");
const type = document.querySelector("#type");
const accessCodeContainer = document.querySelector("#accessCodeContainer");
const accessCode = document.querySelector("#accessCode");
const iNumberContainer = document.querySelector("#iNumberContainer");
const iNumber = document.querySelector("#iNumber");
const output = document.querySelector("#output");

function updatetypeField() {
  const value = type.value;

  // Show the travel notes on the form if they are choosing many campuses and require it
    if (value === 'student'){
        iNumberContainer.hidden = false;
        iNumber.required = true;
        accessCodeContainer.hidden = true;
        accessCode.required = false;
    } else if (value === 'guest') {
        iNumberContainer.hidden = true;
        iNumber.required = false;
        accessCodeContainer.hidden = false;
        accessCode.required = true;
    } else {
        iNumberContainer.hidden = true;
        iNumber.required = false;
        accessCodeContainer.hidden = true;
        accessCode.required = false;
    }
}

type.addEventListener("change", updatetypeField);
updatetypeField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}


form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.type.value;
  const eventDate = form.eventDate.value;
  const accessCode = form.accessCode.value.trim();
  const iNumber = form.iNumber.value.trim();

  // Validate the input
  // Let the user know if they choose many campuses but didn't put a note that they need to add a note
    if (type === 'student' && !iNumber) {
        output.textContent = 'Input I#';
        return;
    }
  
  //Let the user know if they choose many campus but only had one campus selected that they need to choose at least two campuses
    if (type === 'guest' && accessCode !== "EVENT131") {
        output.textContent = 'Invalid Access Code';
        return;
    }

  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>${eventDate}</p>
  <p>${type}</p>
  ${type === 'student'
    ? `<p>I#: ${iNumber}</p>`
    : ''
  }
  `;

  form.reset();
  updatetypeField();
});
          