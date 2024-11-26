// const form = document.getElementById("contactForm");

// const responseMessage = document.getElementById("responseMessage");

 

// form.addEventListener("submit", function(event) {

//   event.preventDefault();

//   const formData = new FormData(form);

//   const urlEncodedData = new URLSearchParams();

 

//   formData.forEach((value, key) => {

//     urlEncodedData.append(key, value);

//   });

 

//   fetch(form.action, {

//     method: "POST",

//     headers: {

//       "Content-Type": "application/x-www-form-urlencoded"

//     },

//     body: urlEncodedData

//   })

 

//   .then(response => {

//     if (response.status === 200) {

//       form.reset();

//       responseMessage.style.display = "block";

//     }

//   })

 

//   .catch(error => {

//     console.error('Error:', error);

   

//     $('.alert').removeClass("hide");

//     $('.alert').addClass("show");

//     $('.alert').addClass("showAlert");

   

//     setTimeout(function(){

//       $('.alert').addClass("hide");

//       $('.alert').removeClass("show");

//       $('.alert').removeClass("showAlert");

//     },5000);

   

//     $('.close-btn').click(function(){

//       $('.alert').addClass("hide");

//       $('.alert').removeClass("show");

//       $('.alert').removeClass("showAlert");

//     });

   

//     form.reset();

//   });

 

// });

const form = document.getElementById("contactForm");
const responseMessage = document.querySelector(".alert");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(form);
  const urlEncodedData = new URLSearchParams(formData);

  fetch(form.action, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: urlEncodedData,
  })
    .then((response) => {
      if (response.ok) {
        form.reset();
        responseMessage.querySelector(".msg").textContent =
          "Message sent successfully!";
        responseMessage.classList.remove("hide");
        responseMessage.classList.add("show", "showAlert");
        setTimeout(() => {
          responseMessage.classList.add("hide");
          responseMessage.classList.remove("show", "showAlert");
        }, 5000);
      } else {
        throw new Error(`Server Error: ${response.status}`);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      responseMessage.querySelector(".msg").textContent =
        "An error occurred. Please try again.";
      responseMessage.classList.remove("hide");
      responseMessage.classList.add("show", "showAlert");
      setTimeout(() => {
        responseMessage.classList.add("hide");
        responseMessage.classList.remove("show", "showAlert");
      }, 5000);
    });

  // Close alert on click
  document.querySelector(".close-btn").addEventListener("click", () => {
    responseMessage.classList.add("hide");
    responseMessage.classList.remove("show", "showAlert");
  });
});

