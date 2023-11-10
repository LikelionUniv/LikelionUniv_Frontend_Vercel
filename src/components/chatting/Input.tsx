import React, { useState } from 'react';
import * as I from './InputStyle';
import AddImg from '../../img/chatting/add_img.svg';

const Input = () => {
    const [inputText, setInputText] = useState('');
    const [isInput, setIsInput] = useState(false);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);

        if (inputText !== '') {
            setIsInput(true);
        }
    };

    // input이 비어있을 때 버튼 스타일
    const defaultStyle = {
        outline: 'none',
        background: 'var(--Grey-600, #adb3ba)',
        cursor: 'default',
    };

    // input에 값이 들어있을 때 버튼 스타일
    const inputStyle = {
        outline: 'none',
        background: 'var(--Orange-600, #FF7710)',
        cursor: 'pointer',
    };
    // 조건에 따른 send 버튼 스타일 설정
    const sendBtnStyle = isInput ? inputStyle : defaultStyle;

    // 전송 버튼에 적용할 클릭 이벤트 함수
    const handleOnClick = () => {
        setInputText('');
        alert('Sucess send!');
    };

    // input에 적용할 Enter 키 입력 함수
    const handleOnKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            handleOnClick();
        }
    };

    return (
        <I.Container>
            <I.Message>
                <img
                    src={AddImg}
                    alt="img icon"
                    width={20}
                    height={20}
                    style={{ padding: '14px 8px 14px 16px', cursor: 'pointer' }}
                />
                <I.MessageInput
                    type="text"
                    placeholder="메시지 입력"
                    style={{ border: 'none' }}
                    onChange={onInputChange}
                    onKeyUp={handleOnKeyUp}
                    value={inputText}
                ></I.MessageInput>
            </I.Message>
            <I.SendMsg style={sendBtnStyle} onClick={handleOnClick}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="26"
                    viewBox="0 0 27 26"
                    fill="none"
                >
                    <path
                        d="M14.4076 22.7806L19.3067 8.08346C19.5412 7.37988 18.8718 6.71051 18.1682 6.94504L3.4711 11.8441C2.63503 12.1228 2.65628 13.3127 3.50176 13.5613L10.1311 15.5111C10.4246 15.5975 10.6542 15.8271 10.7406 16.1206L12.6904 22.75C12.939 23.5954 14.1289 23.6167 14.4076 22.7806Z"
                        fill="white"
                    />
                </svg>
            </I.SendMsg>
        </I.Container>
    );
};

export default Input;
