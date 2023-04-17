export default async function AuthAnimatePlaceholder(params) {

    if (params.id === 'auth_password_input') {
        params.setHidden(await showShowPasswordButton({
            id: params.id,
            hidden: params.hidden,
            setHidden: params.setHidden
        }));
    }
};

function showShowPasswordButton(params) {
    const input = document.getElementById(params.id);

    return new Promise((resolve, reject) => {
        if (checkIfPasswordInputIsEmpty(input)) {
            resolve(true);
        }
        resolve(false);
    });
}

function checkIfPasswordInputIsEmpty(input) {
    if (!input.value) {
        return true;
    }

    return false;
}