// Selector

var usernameValue, phoneNumberValue, password1Value, password2Value;

const form = document.getElementById('form');
const username = document.getElementById('username');
const phoneNumber = document.getElementById('phone-number');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

// Event Handler
form.addEventListener('submit', function(e) {
    e.preventDefault(); // data will not submit to server
    if(checkInputs() === true) {

        usernameValue = username.value.trim();
        phoneNumberValue = phoneNumber.value.trim();
        password1Value = password1.value.trim();
        password2Value = password2.value.trim();
        // console.log(usernameValue);
        firebase
        .database()
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

// Functions
function checkInputs() {
    var count = 0;
    usernameValue = username.value.trim();
    phoneNumberValue = phoneNumber.value.trim();
    password1Value = password1.value.trim();
    password2Value = password2.value.trim();

    if(usernameValue === '') {
        showError(username, "Username can not be blank");
    }
    else {
        showSuccess(username);
        count++;
    } 

    if(phoneNumberValue === '') {
        showError(phoneNumber,"Mobile number can not be blank");
    }
    else if (!isPhoneValid(phoneNumberValue)) {
        showError(phoneNumber, "Mobile number is not Valid");
    } 
    else if(isUserExits(phoneNumberValue)) {
        alert('User already exits. Please Login!!!')
        document.getElementById('username').value = "";
        document.getElementById('phone-number').value = "";
        document.getElementById('password1').value = "";
        document.getElementById('password2').value = "";
        return false;
    }
    else {
        showSuccess(phoneNumber);
        count++;
    }     

    if(password1Value === '') {
        showError(password1, "Password can not be blank");
    }
    else if(isPasswordValid(password1Value) < 6) {
        showError(password1, "Password must be greater than 6");
    }
    else {
        showSuccess(password1);
        count++;
    }

    if(password2Value === '') {
        showError(password2, "Password can not be blank");
    }
    else if(password2Value != password1Value) {
        showError(password2, "Passwords not matched");
    }
    else {
        showSuccess(password2);
        count++;
    }

    if(count === 4) {
        return true;
    }
    return false;
}

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

function isUserExits(phoneNumber) {
    // firebase
    //     .database()
    //     .ref("Users/" + phoneNumber)
    //     .on("value", function (snap) {
    //         return snap.exists()
    //     });
    // firebase
    //     .database()
    //     .ref("Users/" + phoneNumber)
    //     .get()
    //     .then( (snap) => {
    //         if(snap.exits()) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     });
    var result = fetchDataWithValue(phoneNumber);
    return result;
}

function fetchDataWithValue(a) {
    var reference = firebase.database().ref("Users/");
    reference.orderByChild("phone").equalTo(a).once('value', function(snap) {
        var b = 0;
        snap.forEach(function(childsnap){
            b++;
        });
        return true;
   });
   return false;
  }