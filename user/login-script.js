// Selector
var phoneNumberValue, passwordValue;

const form = document.getElementById('form');
const phoneNumber = document.getElementById('phone-number');
const password = document.getElementById('password');

// Event Handler
form.addEventListener('submit',function(e){
    e.preventDefault(); // data will not submit to server
    phoneNumberValue = phoneNumber.value.trim();
    passwordValue = password.value.trim();

    var count = 0;
    if(phoneNumberValue == "") {
        showError(phoneNumber, "Phone number cannot be blank");
    } else if (!isPhoneValid(phoneNumberValue)) {
        showError(phoneNumber, "Enter a valid 10 digit phone number.")
    } else {
        count++;
        showSuccess(phoneNumber);
    }

    if(passwordValue == "") {
        showError(password, "Password cannot be blank");
    } else {
        count++;
        showSuccess(phoneNumber);
    }
    var b = 0;
    if (count == 2) {
        var reference = firebase.database().ref("Users/");
        reference.orderByChild("phone").equalTo(phoneNumberValue).once('value', function(snap) {
        snap.forEach(function(childsnap){
            b++;
        });
        if(b>0) {
            var phoneNumberData;
            firebase.database().ref("Users/" + phoneNumberValue).on("value", function(snap) {
                phoneNumberData = snap.val().password;
                if(passwordValue == phoneNumberData) {
                    alert("Login Succesfully!!!");
                    window.location.href = "../index.html";
                }
                else {
                    alert("Login failed. Enter login credentials again!!!");
                    document.getElementById('phone-number').value = "";
                    document.getElementById('password').value = "";
                }
            });
        } else {
            alert("Please, create your account!!!");
            document.getElementById('phone-number').value = "";
            document.getElementById('password').value = "";
            window.location.href = "./sign-up.html";
        }
   });
}
});

function showError(input,msg)
{
    const formControl = input.parentNode;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML = msg;
}
function showSuccess(input)
{
    const formControl = input.parentNode;
    formControl.className = 'form-control success';
}

function isPhoneValid(phoneNumber){
    return /^[789]\d{9}$/.test(phoneNumber);
}