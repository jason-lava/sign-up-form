// ensure passwords match
function passwordMatch() {

    const password1 = document.getElementById('password');
    const password2 = document.getElementById('confirmPassword');
    
    if(password1.value != password2.value) {
        password2.setCustomValidity('Password Must be Matching.');
    } else {
        password2.setCustomValidity('');
    }

}