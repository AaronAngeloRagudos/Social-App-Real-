export default function AuthAnimatePlaceholder(params) {
    const placeholder = document.getElementsByClassName('placeholder_text')[params.index];
    const input = document.getElementsByClassName('auth_input')[params.index];

    if (params.id === 'auth_password_input') {
        animateShowButton(input, params.setHidden);
    }

    if (input.value) {
        return;
    }

    if (!input.value) {
        if (params.focus === 'onfocus') {
            placeholder.animate({
                transform: 'scale(0.82) translate(0, -130%)'
            }, {
                duration: 150,
                easing: 'ease-in-out',
                fill: 'forwards'
            })
        }

        if (params.focus === 'outfocus') {
            placeholder.animate({
                transform: 'scale(1) translate(10%, -50%)'
            }, {
                duration: 150,
                easing: 'ease-in-out',
                fill: 'forwards'
            })
        }
    }
};

function animateShowButton(input, setHidden) {
    if (input.value) {
        return setHidden(false);
    }

    setHidden(true);
};