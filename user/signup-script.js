// // Selector

var usernameValue, phoneNumberValue, password1Value, password2Value;

const form = document.getElementById('form');
const username = document.getElementById('username');
const phoneNumber = document.getElementById('phone-number');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');


form.addEventListener('submit', function(e){
    e.preventDefault();
    usernameValue = username.value.trim();
    phoneNumberValue = phoneNumber.value.trim();
    password1Value = password1.value.trim();
    password2Value = password2.value.trim();

    var count = 0;
    if(usernameValue == ''){
        showError(username, "Username can not be blank");
    } else {
        count++;
        showSuccess(username);
    }

    if(phoneNumberValue == ''){
        showError(username, "Username can not be blank");
    } else if(!isPhoneValid(phoneNumberValue)){
        showError(phoneNumber, "Enter a valid 10 digit phone number.")
    } else {
        count++;
        showSuccess(phoneNumber);
    }

    if(password1Value.length < 6){
        showError(password1, "Password must be greater than 6 characters.")
    } else {
        count++;
        showSuccess(password1);
    }

    if(password2Value.length < 6){
        showError(password2, "Password must be greater than 6 characters.");
    } else if(password1Value != password2Value){
        showError(password2, "Re-entered password does not match with the given password.")
    } else {
        count++;
        showSuccess(password2);
    }
    console.log(count);
    var b = 0;
    if (count == 4){
        var reference = firebase.database().ref("Users/");
        reference.orderByChild("phone").equalTo(phoneNumberValue).once('value', function(snap) {
        snap.forEach(function(childsnap){
            console.log(childsnap.val().name);
            b++;
        });
        if(b>0){
            alert('User already exits. Please Login!!!')
            document.getElementById('username').value = "";
            document.getElementById('phone-number').value = "";
            document.getElementById('password1').value = "";
            document.getElementById('password2').value = "";
        } else {
            firebase.database()
            .ref("Users/" + phoneNumberValue)
            .set({
                name: usernameValue,
                phone: phoneNumberValue,
                password: password1Value,
            });
            alert("Account created Successfully!!!");
            document.getElementById('username').value = "";
            document.getElementById('phone-number').value = "";
            document.getElementById('password1').value = "";
            document.getElementById('password2').value = "";
        }
   });
}   
});

function showError(input,msg) {
    const formControl = input.parentNode;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML = msg;
}

function showSuccess(input) {
    const formControl = input.parentNode;
    formControl.className = 'form-control success';
}

function isPhoneValid(phoneNumber) {
    return /^[789]\d{9}$/.test(phoneNumber);
}

function isPasswordValid(password) {
    return password.length;
}
