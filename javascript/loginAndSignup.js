const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const rememberCheck = document.getElementById('remember');
const togglePassword = document.getElementById('toggle-password');
const errorBox = document.getElementById('login-error');

let email = '';
let password = '';
let remember = false;
let isValid = false;
let error = '';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const USERS_KEY = 'users';

let users = [];
let foundUser = null;
let currentUser = null;

const signupForm = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const signupEmailInput = document.getElementById('email');
const signupPasswordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirm');
const signupBtn = document.getElementById('signup-btn');
const termsCheck = document.getElementById('terms');
const signupError = document.getElementById('signup-error');

let fullName = '';
let signupEmail = '';
let signupPassword = '';
let confirmPassword = '';
let terms = false;
let signupValid = false;
let signupErrorMsg = '';
signupForm.addEventListener('submit', function(event){
    event.preventDefault();
    fullName=nameInput.value;
    signupEmail =signupEmailInput.value;
    signupPassword =signupPasswordInput.value;
    confirmPassword=confirmInput.value;
    terms =termsCheck.checked;
    // validitions
    if(signupPassword!==confirmPassword){
        signupErrorMsg="your password is not the same";
        signupError.textContent=signupErrorMsg;
        return;
    }
    if(terms===false){
        signupErrorMsg="please tick the the terms"
        signupError.textContent=signupErrorMsg;
        return;
    }
    signupValid=true;
    signupError.textContent='';
    const SECRET_KEY="secre_key_123";
    let encryptpassword=signupPassword;
    if(typeof CryptoJS!=='undefined'){
        encryptpassword=CryptoJS.AES.encrypt(signupPassword, SECRET_KEY).toString();
    }
    localStorage.setItem('savedUser',fullName);
    localStorage.setItem('savedPassword', encryptpassword);
    window.location.href = './index.html';
});
loginForm.addEventListener('submit',function(event){
    event.preventDefault();
    email=emailInput.value;
    password=passwordInput.value;
    remember=rememberCheck.checked;
    if(emailRegex.test(email)===false){
        error='your email is not correct';
        errorBox.textContent=error;
        return;    
    }
    const storeUsers=localStorage.getItem( USERS_KEY);
})