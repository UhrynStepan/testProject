var defaultCredentials = {
    email: 'admin@admin.com',
    password: 'admin'
};

function handleLogin() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email === defaultCredentials.email && password === defaultCredentials.password) {
        window.location.href = "page3.html";
    } else {
        document.getElementById("username").classList.add('myClass');
    }
}

function onFocus() {
    document.getElementById("username").classList.remove('myClass');
}

function singup1() {
    var name = document.getElementById('name');
    var surname = document.getElementById('surname');
    var email = document.getElementById('email');
    var country = document.getElementById('country');
    var city = document.getElementById('city');
    var phone = document.getElementById('phone');
    var date = document.getElementById('date');
    if (name.value === "") {
        alert("enter your name");
    }
    else if (surname.value === "") {
        alert("enter your surname");
    }
    else if (email.value === "") {
        alert("enter your email");
    }
    else if (country.value === "") {
        alert("enter your country");
    }
    else if (city.value === "") {
        alert("enter your city");
    }
    else if (phone.value === "") {
        alert("enter your phone");
    }
    else if (date.value === "") {
        alert("enter your date");
    }
    else {
        window.location.href = "page3.html";
    }
}
