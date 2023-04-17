export default function AuthShowPassword(e) {
    const input = document.getElementById('auth_password_input');

    if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text');
        e.target.innerText = 'HIDE';
    } else {
        input.setAttribute('type', 'password');
        e.target.innerText = 'SHOW';
    }
};


