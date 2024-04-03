import { useEffect, useState } from 'react';
import LoginView from './LoginView';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import firebase from '../../config/firebase';
import AS_USER from '@react-native-async-storage/async-storage';
import constants from '../../components/components.constants';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorLogin, setErrorLogin] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [disableLoginButton, setDisableLoginButton] = useState(true);

    const auth = getAuth(firebase);
    const handleLoginUser = (user) => {
        AS_USER.setItem('user', JSON.stringify(user));
        navigation.navigate('Menu');
        setIsLoading(false);
    };

    const handleEmail = (value) => {
        setEmail(value);
    };
    const handlePassword = (value) => {
        setPassword(value);
    };
    const handleLogin = () => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                handleLoginUser(user);
            })
            .catch((error) => {
                setIsLoading(false);
                setErrorLogin(true);
                console.log(error.message);
            });
    };

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Email de redefinição de senha enviado com sucesso
                alert(constants.texts.descricaoModalSucessoRedefinirSenha);
                setPassword('');
            })
            .catch((error) => {
                alert(constants.texts.descricaoModalErroRedefinirSenha);
            });
    };

    const verifyForLoginButton = () => {
        if (email != '' && password != '') {
            setDisableLoginButton(false);
        } else {
            setDisableLoginButton(true);
        }
        setErrorLogin(false);
    };

    useEffect(() => {
        verifyForLoginButton();
    }, [email, password]);

    return (
        <LoginView
            email={email}
            handleEmail={handleEmail}
            password={password}
            handlePassword={handlePassword}
            disableLoginButton={disableLoginButton}
            handleLogin={handleLogin}
            errorLogin={errorLogin}
            isLoading={isLoading}
            handleResetPassword={handleResetPassword}
        />
    );
};

export default Login;
