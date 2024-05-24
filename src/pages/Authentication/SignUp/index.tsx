import React, { ChangeEvent, useRef, useState, KeyboardEvent } from 'react'
import BasicLayout from '../../../layouts/BasicLayout'
import '../../../App.css'
import './style.css'
import { useNavigate } from 'react-router-dom';
import { CheckCertificationRequestDto, EmailCertificationRequestDto, IdCheckRequestDto, SignUpRequestDto } from 'api/request/auth';
import { SignUpRequest, checkCertificationRequest, emailCertificationRequest, idCheckRequest } from 'api';
import { CheckCertificationResponseDto, EmailCertificationResponseDto, IdCheckResponseDto, SignUpResponseDto } from 'api/response/auth';
import { ResponseDto } from 'api/response';
import { ResponseCode } from 'types/enums';
import InputBox from 'component/inputBox';
import { ResponseBody } from 'types';

export default function SignUp() {

    const idRef = useRef<HTMLInputElement | null>(null);
    const nicknameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const passwordCheckRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const certificationNumberRef = useRef<HTMLInputElement | null>(null);

    const [id, setId] = useState<string>('');
    const [nickname, setNickname] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordCheck, setPasswordCheck] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [certificationNumber, setCertificationNumber] = useState<string>('');

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
    const [isCertificationCheck, setCertificationCheck] = useState<boolean>(false);

    // 회원가입 버튼이 열리기 위한 조건으로 모든 값이 입력되어야 한다
    const signUpButtonClass = id && nickname && password && passwordCheck && email && certificationNumber ? 'primary-button-lg':'disable-button-lg';

    // 이메일 패턴
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // 비밀번호 패턴
    const passwordPattern = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,13}$/;

    // 아이디 패턴
    const idPattern = /^(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{5,10}$/;

    // path 연결 네비게이트
    const navigate = useNavigate();

    // 아이디 중복 확인
    const idCheckResponse = (responseBody: ResponseBody<IdCheckResponseDto>) => {
        if(!responseBody) return;
        const { code } = responseBody;
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

    //이메일주소 확인 후 인증번호 발송
    const emailCertificationResponse = (responseBody: ResponseBody<EmailCertificationResponseDto>) => {
        if(!responseBody) return;
        const { code } = responseBody;
        if (code === ResponseCode.VALIDATION_FAIL) alert('아이디와 이메일을 모두 입력하세요.');
        if (code === ResponseCode.DUPLICATE_ID) {
            setIdError(true);
            setIdMessage('이미 사용중인 아이디입니다.');
            setIdCheck(false);
        }

        if (code === ResponseCode.MAIL_FAIL) alert('이메일 전송에 실패하였습니다.');
        if (code === ResponseCode.DATABASE_ERROR) alert('데이터베이스 오류입니다.');
        if (code !== ResponseCode.SUCCESS) return;

        setEmailError(false);
        setEmailMessage('인증번호가 전송되었습니다.');
    };

    //이메일 인증번호 일치여부 확인
    const checkCertificationResponse = (responseBody: ResponseBody<CheckCertificationResponseDto>) => {
        if(!responseBody) return;
        const { code } = responseBody;
        if(code === ResponseCode.VALIDATION_FAIL) alert('아이디, 이메일, 인증번호를 모두 입력해주세요.');
        if(code === ResponseCode.CERTIFICATION_FAIL) {
            setCertificationNumberError(true);
            setCertificationNumberMessage('인증번호가 일치하지 않습니다.');
            setCertificationCheck(false);
        }
        if (code === ResponseCode.DATABASE_ERROR) alert('데이터베이스 오류입니다.');
        if (code !== ResponseCode.SUCCESS) return;

        setCertificationNumberError(false);
        setCertificationNumberMessage('인증번호가 확인되었습니다.');
        setCertificationCheck(true);
    }

    const signUpResponse = (responseBody: ResponseBody<SignUpResponseDto>) => {
        if(!responseBody) return;
        const { code } = responseBody;
        if(code === ResponseCode.VALIDATION_FAIL) alert('모든 값을 입력하세요.');
        if (code === ResponseCode.DUPLICATE_ID){
            setIdError(true);
            setIdMessage('이미 사용중인 아이디입니다.');
            setIdCheck(false);
        }
        if(code === ResponseCode.CERTIFICATION_FAIL) {
            setCertificationNumberError(true);
            setCertificationNumberMessage('인증번호가 일치하지 않습니다.');
            setCertificationCheck(false);
        }
        if (code === ResponseCode.DATABASE_ERROR) alert('데이터베이스 오류입니다.');
        if (code !== ResponseCode.SUCCESS) return;

        navigate('/login');
    }

    const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setId(value);
        setIdMessage('');
        setIdCheck(false);
        if (!idPattern.test(value)) {
            setIdError(true);
            setIdMessage('아이디는 문자/숫자 포함 형태의 5~10자리여야 합니다.');
        } else {
            setIdError(false);
            setIdMessage('');
        }
    };

    const onNicknameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setNickname(value);
        setNicknameMessage('');
    };

    const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPassword(value);
        if (!passwordPattern.test(value)) {
            setPasswordError(true);
            setPasswordMessage('영문, 숫자 포함 8자 이상 입력해주세요.');
        } else {
            setPasswordError(false);
            setPasswordMessage('');
        }
    };

    const onPasswordCheckChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPasswordCheck(value);
        if (!passwordPattern.test(value)) {
            setPasswordCheckError(true);
            setPasswordCheckMessage('영문, 숫자 포함 8자 이상 입력해주세요.');
        } else {
            setPasswordCheckError(false);
            setPasswordCheckMessage('');
        }
    };

    const onEmailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setEmail(value);
        if (!emailPattern.test(value)) {
            setEmailError(true);
            setEmailMessage('영문, 숫자 포함 8자 이상 입력해주세요.');
        } else {
            setEmailError(false);
            setEmailMessage('');
        }
    };

    const onCertificationNumberChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setCertificationNumber(value);
        setCertificationNumberMessage('');
        setCertificationCheck(false);
    };

    const onIdButtonClickHandler = () => {
        if (!id) return;
        if (isIdError) return; // prevent the request if the ID format is invalid
        const requestBody: IdCheckRequestDto = { id };

        idCheckRequest(requestBody).then(idCheckResponse);
    };

    const onEmailButtonClickHandler = () => {
        if (!id || !email) return;
        const checkedEmail = emailPattern.test(email);
        if (!checkedEmail) {
            setEmailError(true);
            setEmailMessage('이메일 형식이 아닙니다.');
            return;
        }
        const requestBody: EmailCertificationRequestDto = { id, email };
        emailCertificationRequest(requestBody)
            .then(emailCertificationResponse);

        setEmailError(false);
        setEmailMessage('이메일 전송중 ...');
    };

    const onCertificationNumberButtonClickHandler = () => {
        if (!id || !email || !certificationNumber) return;
        const requestBody: CheckCertificationRequestDto = { id, email, certificationNumber };
        checkCertificationRequest(requestBody).then(checkCertificationResponse);
    };

    //회원가입 처리
    const onSignUpButtonClickHandler = () => {
        if (!id || !nickname || !password || !passwordCheck || !email || !certificationNumber) return;
        if (!isIdCheck) {
            alert('중복확인은 필수입니다.');
            return;
        }
        const checkedPassword = passwordPattern.test(password);
        if (!checkedPassword) {
            setPasswordError(true);
            setPasswordMessage('영문, 숫자를 혼용하여 8~13자 입력해주세요.');
            return;
        }
        if (password !== passwordCheck) {
            setPasswordCheckError(true);
            setPasswordCheckMessage('비밀번호가 일치하지 않습니다.');
            return;
        }
        if (!isCertificationCheck) {
            alert('이메일 인증은 필수입니다.');
            return;
        }
        const requestBody: SignUpRequestDto = { id, nickname, password, email, certificationNumber };
        SignUpRequest(requestBody).then(signUpResponse);
    };

    const onSignInButtonClickHandler = () => {
        navigate('/login');
    };

    const onIdKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        onIdButtonClickHandler();
    }
    const onNicknameKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        if (!passwordRef.current) return;
        passwordRef.current.focus();
    };

    const onPasswordKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        if (!passwordCheckRef.current) return;
        passwordCheckRef.current.focus();
    };
    const onPasswordCheckKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        if (!emailRef.current) return;
        emailRef.current.focus();
    };
    const onEmailKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        onEmailButtonClickHandler();
    };
    const onCertificationNumberKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
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
                                <div className={`${signUpButtonClass}`} onClick={onSignUpButtonClickHandler}>{'회원가입'}</div>
                                <div className='text-link-lg w-full' onClick={onSignInButtonClickHandler}>{'로그인'}</div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </BasicLayout>
    )
}
