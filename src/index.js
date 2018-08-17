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

function logine() {
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var email = document.getElementById('email').value;
    var country = document.getElementById('country').value;
    var city = document.getElementById('city').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('date').value;

    console.log('name: ', name);
    console.log('surname: ', surname);
    console.log('email: ', email);
    console.log('country: ', country);
    console.log('city: ', city);
    console.log('phone: ', phone);
    console.log('date: ', date);
}
function onFocus () {
    document.getElementById("username").classList.remove('myClass');
}
