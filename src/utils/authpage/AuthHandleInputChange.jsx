let statusArr = {
    login: {
        email: false,
        password: false
    },
    register: {
        email: false,
        userName: false,
        fullName: false,
        password: false
    }
}

export default function AuthHandleInputChange(params) {

    if (params.type === 'login') {

        if (params.input === 'auth_email_input') {

            if (params.value) {
                statusArr.login.email = true;
            } else {
                statusArr.login.email = false;
            }

        }

        if (params.input === 'auth_password_input') {

            if (params.value) {
                statusArr.login.password = true;
            } else {
                statusArr.login.password = false;
            }

        }

        if (!statusArr.login.email || !statusArr.login.password) {
            return params.setIsDisabled(true);
        }
    }

    if (params.type === 'register') {

        if (params.input === 'auth_email_input') {

            if (params.value) {
                statusArr.register.email = true;
            } else {
                statusArr.register.email = false;
            }

        }

        if (params.input === 'auth_username_input') {

            if (params.value) {
                statusArr.register.userName = true;
            } else {
                statusArr.register.userName = false;
            }

        }

        if (params.input === 'auth_fullname_input') {

            if (params.value) {
                statusArr.register.fullName = true;
            } else {
                statusArr.register.fullName = false;
            }

        }

        if (params.input === 'auth_password_input') {

            if (params.value) {
                statusArr.register.password = true;
            } else {
                statusArr.register.password = false;
            }

        }

        if (!statusArr.register.email
            || !statusArr.register.password
            || !statusArr.register.userName
            || !statusArr.register.fullName
        ) {
            return params.setIsDisabled(true);
        }
    }

    params.setIsDisabled(false);
};