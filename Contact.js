const form = document.getElementById("contactForm");

const responseMessage = document.getElementById("responseMessage");

 

form.addEventListener("submit", function(event) {

  event.preventDefault();

  const formData = new FormData(form);

  const urlEncodedData = new URLSearchParams();

 

  formData.forEach((value, key) => {

    urlEncodedData.append(key, value);

  });

 

  fetch(form.action, {

    method: "POST",

    headers: {

      "Content-Type": "application/x-www-form-urlencoded"

    },

    body: urlEncodedData

  })

 

  .then(response => {

    if (response.status === 200) {

      form.reset();

      responseMessage.style.display = "block";

    }

  })

 

  .catch(error => {

    console.error('Error:', error);

   

    $('.alert').removeClass("hide");

    $('.alert').addClass("show");

    $('.alert').addClass("showAlert");

   

    setTimeout(function(){

      $('.alert').addClass("hide");

      $('.alert').removeClass("show");

      $('.alert').removeClass("showAlert");

    },5000);

   

    $('.close-btn').click(function(){

      $('.alert').addClass("hide");

      $('.alert').removeClass("show");

      $('.alert').removeClass("showAlert");

    });

   

    form.reset();

  });

 

});
