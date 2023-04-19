let progress;
let prevValue = '';


export default function AuthCheckPasswordStrength(value) {
    const strong = new RegExp(/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{10,}$/);
    const medium = new RegExp(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6,}$/);
    const progressBar = document.querySelector('.auth_progress_bar');
    const progressText = document.querySelector('.auth_strength_text');

    const timesFive = value.length * 5;

    progress = 100 - timesFive;

    if (!medium.test(value) && medium.test(prevValue)) {
        progress = 100 + 15 - timesFive;
    }

    if (!strong.test(value) && strong.test(prevValue)) {
        progress = 100 + 25 - timesFive;
    }

    if (medium.test(value)) {
        progress = 100 - 15 - timesFive;
        console.log('med')
    }

    if (strong.test(value)) {
        progress = 100 - 25 - timesFive;
    }

    prevValue = value;

    if (progress === 100) {
        progressBar.style.opacity = '0';
        progressText.style.opacity = '0';
    } else {
        progressBar.style.opacity = '1';
        progressText.style.opacity = '1';
    }

    progressBar.style.transform = `translate(-${progress <= 0 ? 0 : `${progress}%`}, 0)`

    if (progress >= 70) {
        progressBar.style.backgroundColor = '#CD201F';
        progressText.style.color = '#CD201F';
        progressBar.style.boxShadow = '0 0.1rem 0.35rem 0.05rem #CD201F';
        progressText.innerText = 'weak';
    } else if (progress >= 45 && progress < 70) {
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