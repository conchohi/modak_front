import React, { ChangeEvent, useRef, useState, KeyboardEvent } from 'react'
import BasicLayout from '../../../layouts/BasicLayout'
import '../../../App.css'
import './style.css'
import { useNavigate } from 'react-router-dom';
import { idCheckRequestDto } from 'api/request/auth';
import { idCheckRequest } from 'api';
import { IdCheckResponseDto } from 'api/response/auth';
import { ResponseDto } from 'api/response';
import { ResponseCode } from 'types/enums';
import InputBox from 'component/inputBox';
// import '../../../api/response/response.dto';


export default function SignUp() {

    const idRef = useRef<HTMLInputElement | null>(null);
    const nicknameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const passwordCheckRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const certificationNumberRef = useRef<HTMLInputElement | null>(null);

    const [id,setId] = useState<string>('');
    const [nickname,setNickname] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [passwordCheck,setPasswordCheck] = useState<string>('');
    const [email,setEmail] = useState<string>('');
    const [certificationNumber,setCertificationNumber] = useState<string>('');

    const [isIdError, setIdError] = useState<boolean>(false);
    const [isNicknameError, setNicknameError] = useState<boolean>(false);
    const [isPasswordError, setPasswordError] = useState<boolean>(false);
    const [isPasswordCheckError, setPasswordCheckError] = useState<boolean>(false);
    const [isEmailError, setEmailError] = useState<boolean>(false);
    const [isCertificationNumberError, setCertificationNumberError] = useState<boolean>(false);

    const [idMessage, setIdMessage] = useState<string>('');
    const [nicknameMessage, setNicknameMessage] = useState<string>('');
    const [passwordMessage, setPasswordMessage] = useState<string>('');
    const [passwordCheckMessage, setPasswordCheckMessage] = useState<string>('');
    const [emailMessage, setEmailMessage] = useState<string>('');
    const [certificationNumberMessage, setCertificationNumberMessage] = useState<string>('');

    const [isIdCheck, setIdCheck] = useState<boolean>(false);

    const signUpButtonClass = id && nickname && password && passwordCheck && email && certificationNumber ? 'primary-button-lg':'disable-button-lg';

    const navigate = useNavigate();

    const idCheckResponse = (responseBody: IdCheckResponseDto| ResponseDto|null) => {
        if(!responseBody) return;
        const {code} = responseBody;
        if (code === ResponseCode.VALIDATION_FAIL) alert('아이디를 입력하세요.');
        if (code === ResponseCode.DUPLICATE_ID){
            setIdError(true);
            setIdMessage('이미 사용중인 아이디입니다.');
            setIdCheck(false);
        }
        if (code === ResponseCode.DATABASE_ERROR) alert('데이터베이스 오류입니다.');
        if (code !== ResponseCode.SUCCESS) return;

        setIdError(false);
        setIdMessage('사용 가능한 아이디입니다.');
        setIdCheck(true);

    };


    const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const{value} = event.target;
        setId(value);
        setIdMessage('');
        setIdCheck(false);
    };

    const onNicknameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const{value} = event.target;
        setNickname(value);
        setNicknameMessage('');
    };

    const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const{value} = event.target;
        setPassword(value);
        setPasswordMessage('');
    };

    const onPasswordCheckChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const{value} = event.target;
        setPasswordCheck(value);
        setPasswordCheckMessage('');
    };

    const onEmailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const{value} = event.target;
        setEmail(value);
        setEmailMessage('');
    };

    const onCertificationNumberChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const{value} = event.target;
        setCertificationNumber(value);
        setCertificationNumberMessage('');
    };
    

    const onIdButtonClickHandler = () => {
        if (!id) return;
        const requestBody : idCheckRequestDto = {id};

        idCheckRequest(requestBody).then(idCheckResponse);
    };
    const onEmailButtonClickHandler = () => {};
    const onCertificationNumberButtonClickHandler = () => {};

    const onSignUpButtonClickHandler = () => {

    };

    const onSignInButtonClickHandler = () => {
        navigate('/login');
    };

    const onIdKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key !== 'Enter') return;
        onIdButtonClickHandler();
    }
    const onNicknameKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key !== 'Enter') return;
        if(!passwordRef.current) return;
        passwordRef.current.focus();
    };

    const onPasswordKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key !== 'Enter') return;
        if(!passwordCheckRef.current) return;
        passwordCheckRef.current.focus();
    };
    const onPasswordCheckKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key !== 'Enter') return;
        if(!emailRef.current) return;
        emailRef.current.focus();
    };
    const onEmailKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key !== 'Enter') return;
        onEmailButtonClickHandler();
    };
    const onCertificationNumberKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key !== 'Enter') return;
        onCertificationNumberButtonClickHandler();
    };

    return (
        <BasicLayout>
        <div id='sign-up-wrapper'>
            <div className='sign-up-image'></div>
            <div className='sign-up-container'>
                <div className='sign-up-box'>
                    <div className='sign-up-title'>{'Mo_Dak 캠핑장 추천 서비스'}</div>
                    <div className='sign-up-content-box'>
                        <div className='sign-up-content-sns-sign-in-box'>
                            <div className='sign-up-content-sns-sign-in-title'>{'SNS 회원가입'}</div>
                            <div className='sign-up-content-sign-in-button-box'>
                                <a href='http://localhost:4040/oauth2/authorization/kakao'> <div className='kakao-sign-in-button'/> </a>
                                <a href='http://localhost:4040/oauth2/authorization/naver'><div className='naver-sign-in-button'/> </a>
                            </div>
                        </div> 
                        <div className='sign-up-content-divider'></div> 
                        <div className='sign-up-content-input-box'>
                            <InputBox ref={idRef} title='아이디' placeholder='아이디를 입력해주세요.' type='text' value={id} onChange={onIdChangeHandler} isErrorMessage={isIdError} message={idMessage} buttonTitle='중복확인' onButtonClick={onIdButtonClickHandler} onKeyDown={onIdKeyDownHandler}/> 
                            <InputBox ref={nicknameRef} title='닉네임' placeholder='사용할 닉네임을 입력해주세요.' type='text' value={nickname} onChange={onNicknameChangeHandler} isErrorMessage={isNicknameError} message={nicknameMessage} onKeyDown={onNicknameKeyDownHandler}/> 
                            <InputBox ref={passwordRef} title='비밀번호' placeholder='비밀번호를 입력해주세요.' type='password' value={password} onChange={onPasswordChangeHandler} isErrorMessage={isPasswordError} message={passwordMessage} onKeyDown={onPasswordKeyDownHandler}/> 
                            <InputBox ref={passwordCheckRef} title='비밀번호 확인' placeholder='비밀번호를 입력해주세요.' type='password' value={passwordCheck} onChange={onPasswordCheckChangeHandler} isErrorMessage={isPasswordCheckError} message={passwordCheckMessage} onKeyDown={onPasswordCheckKeyDownHandler}/> 
                            <InputBox ref={emailRef} title='이메일' placeholder='이메일을 입력해주세요.' type='text' value={email} onChange={onEmailChangeHandler} isErrorMessage={isEmailError} message={emailMessage} buttonTitle='이메일 인증' onButtonClick={onEmailButtonClickHandler} onKeyDown={onEmailKeyDownHandler}/> 
                            <InputBox ref={certificationNumberRef} title='이메일 인증번호' placeholder='인증번호 4자리를 입력해주세요.' type='text' value={certificationNumber} onChange={onCertificationNumberChangeHandler} isErrorMessage={isCertificationNumberError} message={certificationNumberMessage} buttonTitle='인증확인' onButtonClick={onCertificationNumberButtonClickHandler} onKeyDown={onCertificationNumberKeyDownHandler}/> 
                        </div> 
                        <div className='sign-up-content-button-box'>
                            <div className={`${signUpButtonClass} w-full`} onClick={onSignUpButtonClickHandler}>{'회원가입'}</div>
                            <div className='text-link-lg w-full' onClick={onSignInButtonClickHandler}>{'로그인'}</div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        </BasicLayout>
    )
}


