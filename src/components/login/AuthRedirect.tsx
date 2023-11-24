import {useEffect , useState} from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import { userState } from '../../store/user';
import { useSetRecoilState } from 'recoil';
import {requestIdtoken , requestLogin ,requestUserInfo} from '../../api/auth/auth';
import axios from 'axios';

const AuthRedirect = () =>{
    const navigate = useNavigate();
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    const {provider} = useParams();
    const updateUserState = useSetRecoilState(userState);

    useEffect( () => {
        const socialLogin = async () => {

            const idtoken = await requestIdtoken(authorizationCode , provider);
            console.log(idtoken , typeof(idtoken))
            const isUser = await requestLogin(provider,idtoken);
            
            const userInfo = await requestUserInfo();
            updateUserState(userInfo);
            console.log(userInfo);
            
            isUser ? navigate("/") : navigate(`/signup/${provider}`)
        }

        socialLogin();
    },[]);

    return (
    <div>
    </div>
    )
}

export default AuthRedirect;