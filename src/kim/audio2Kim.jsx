import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/채수원3.m4a';
import logo from './img/DAALL_logo.jpeg';

function Audio2Kim() {
  return (
    <div className={styled.screen}>
        <div>
            <img className={styled.logo} src={logo} alt="img"/>
            <br/>
            <ReactAudioPlayer
                src={sound}
                autoPlay
                controls
            />
            <div className={styled.body}>
              <div className={styled.headerBox}>
                <p style={{fontSize: '25px'}}>어머니</p>
                <p style={{fontSize: '20px', textAlign: 'right'}}>김보경</p>
              </div>
              <div style={{textAlign: 'left'}}>
                  <p>어머니는 나의 영원한 신</p>
                  <p>가족을 사랑하는 마음은 그 무엇에</p>
                  <p>비할 수 없네 떠나 올때는 다시</p>
                  <p>못볼줄 서러웠는데…</p>
                  <br/>
                  <p>또다른 가족을 만들고 나니</p>
                  <p>그곳의 어머니는 나를 너무 사랑해</p>
                  <p>또다른 정을 들여가며</p>
                  <p>이곳에 묻혀 생활하다보니</p>
                  <p>친어머니 보다 더 좋아지는 것은</p> 
                  <p>어쩔 수 없네</p>
                  <br/>
                  <p>영원히 오래 같이 살줄 알았는데</p>
                  <p>어느새 모두 떠나고…</p>
                  <br/>
                  <p>이제 어머니가 된 나</p>
                  <p>자식들도 떠나고 나니</p>
                  <p>두 어머니를 기리는 마음</p>
                  <p>가슴속 영원히 섬기는 신</p>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Audio2Kim;
