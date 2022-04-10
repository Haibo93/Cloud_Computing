/*!
* Start Bootstrap - Business Frontpage v5.0.8 (https://startbootstrap.com/template/business-frontpage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-frontpage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Select the register form element and call asynchronous function when form is submitted
document.getElementById('register-user').addEventListener('submit', async function(event) {
    // Prevents the form from submitting before code below can be ran
    event.preventDefault();
    // Declare variable to store the event (submission) target (completed form)
    const form = event.target;
    const formObject = {};
    // Map values of form fields to keys (which match database schema)
    formObject['last_name'] = form.last_name.value;
    formObject['first_name'] = form.first_name.value;
    formObject['email'] = form.email.value;
    formObject['password'] = form.password.value;
    formObject['phone_number'] = form.phone_number.value;
    formObject['company_name'] = form.company_name.value;
    formObject['is_admin'] = form.is_admin.value;
    console.log('formObject');
    // Send POST request with JSON representation of the above formObject to registerUser route
    const res = await fetch('/registerUser', {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(formObject)
    });
    // Return response from registerUser route
    if (res.status == 200) {
      window.location = '/userpage.html';
    };
});

// Below uses the same logic as the above to capture data upon submission of the login form and POST to loginUser route
document.getElementById('login-user').addEventListener('submit', async function(event) {
    event.preventDefault();
    const form = event.target;
    const formObject = {};
    formObject['email'] = form.email.value;
    formObject['password'] = form.password.value;
    console.log(formObject);
    const res = await fetch('/loginUser', {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(formObject)
    });
    if (res.status == 200) {
      window.location = '/userpage.html';
    };
    console.log('passed res')
});

