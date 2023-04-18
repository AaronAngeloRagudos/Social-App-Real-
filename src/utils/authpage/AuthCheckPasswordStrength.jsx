
export default function AuthCheckPasswordStrength(value) {
    const strong = new RegExp(/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{10,}$/);
    const medium = new RegExp(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6,}$/);
    const progressBar = document.querySelector('.auth_progress_bar');
    const progressText = document.querySelector('.auth_strength_text');
    let progress = 100;

    if (strong.test(value)) {
        progress -= 15;
        if (value.length === 11) {
            progress += 5;
        }
    } else if (medium.test(value) && value.length >= 6 && value.length < 10) {
        progress -= 30;
        if (value.length >= 7) {
            progress += 5;
            if (value.length >= 8) {
                progress += 5;
                if (value.length === 9) {
                    progress += 5;
                }
            }
        }
    } else {
        progress -= 60;
        switch (value.length) {
            case 1:
                progress -= 36;
                break;
            case 2:
                progress -= 32;
                break;
            case 3:
                progress -= 28;
                break;
            case 4:
                progress -= 24;
                break;
            case 5:
                progress -= 20;
                break;
            case 6:
                progress -= 16;
                break;
            case 7:
                progress -= 12;
                break;
            case 8:
                progress -= 8;
                break;
            case 9:
                progress -= 4;
                break;
            case 10:
                break
        }
        if (value.length > 10) {
            progress = 45;
        }
    }

    if (strong.test(value) && value.length >= 12) {
        progress = 100;
    }

    if (value.length === 0) {
        progress = 0;
    }

    progressBar.animate({
        width: `${progress}%`
    }, {
        duration: 150,
        easing: 'ease-in-out',
        fill: 'forwards'
    });

    if (progress !== 0) {
        document.getElementById('auth_password_strength_indicator').style.opacity = '1';
    } else {
        document.getElementById('auth_password_strength_indicator').style.opacity = '0';
    }

    if (progress <= 35) {
        progressBar.style.backgroundColor = '#CD201F';
        progressText.style.color = '#CD201F';
        progressBar.style.boxShadow = '0 0.1rem 0.35rem 0.05rem #CD201F';
        progressText.innerText = 'weak';
    } else if (progress > 35 && progress <= 80) {
        progressBar.style.backgroundColor = '#b4911e';
        progressText.style.color = '#b4911e';
        progressBar.style.boxShadow = '0 0.1rem 0.35rem 0.05rem #b4911e';
        progressText.innerText = 'moderate';
    } else {
        progressBar.style.backgroundColor = 'limegreen';
        progressText.style.color = 'limegreen';
        progressBar.style.boxShadow = '0 0.1rem 0.35rem 0.05rem #b4911e';
        progressText.innerText = 'good';
    }
}