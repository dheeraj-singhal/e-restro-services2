// Selector
const form = document.getElementById('form');
const phoneNumber = document.getElementById('phone-number');
const password = document.getElementById('password');

// Event Handler
form.addEventListener('submit',function(e){
    e.preventDefault(); // data will not submit to server
    checkInputs();
});

//Functions

function checkInputs(){
    const phoneNumberValue =  phoneNumber.value.trim();
    const passwordValue =  password.value.trim();

    if( phoneNumberValue ==='')
    {
        showError(phoneNumber,"Mobile number can not be blank");
    }
    else if (!isPhoneValid(phoneNumberValue)){
        showError(phoneNumber,"Mobile number is not Valid");
    }
    else
    {
        showSuccess(phoneNumber);
    }    

    if( passwordValue ==='')
    {
        showError(password,"Password can not be blank");
    }
    else
    {
        showSuccess(password);
    }

}

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