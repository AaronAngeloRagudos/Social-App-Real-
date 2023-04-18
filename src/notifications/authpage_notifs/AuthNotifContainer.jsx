import { Suspense, lazy } from "react";
const AuthError = lazy(() => import('./error/AuthError'));

export default function AuthNotifContainer({ type, text }) {

    return (
        <div className="AuthNotif">
            <Suspense>
                { type === 'error' && <AuthError text={text} /> }
            </Suspense>
        </div>
    );
};


export const auth_notif = {
    error: (text) => {
        AuthNotifContainer({ 
            type: 'error',
            text    
        });
    }
};