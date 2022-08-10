import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/채수원3.m4a';
import logo from './img/DAALL_logo.jpeg';

function Audio1Myeong() {
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
                <p style={{fontSize: '25px'}}>스물 아홉에 끝난 청춘</p>
                <p style={{fontSize: '20px', textAlign: 'right'}}>원명화</p>
              </div>
              <div style={{textAlign: 'left'}}>
                  <p>내가 살던 고향은</p>
                  <p>분명의 혜택이 없는</p>
                  <p>조용한 시골이었다</p>
                  <br/>
                  <p>6.25 사변과 함께</p>
                  <p>아버지가 돌아가셨다</p>
                  <p>우리집은 일할 사람이 없는 나는</p>
                  <p>농사꾼이 되었다</p>
                  <p>거머리 무섭다고 논일을 피할 수 없고</p>
                  <p>했볕이 뜨겁다고 밭일을 피할 수 없고</p>
                  <br/>
                  <p>사람의 손이 필요한 곳이면</p>
                  <p>어데던지 가야했다 </p>
                  <p>3년이란 세월이 흐른뒤에</p>
                  <p>스므살 어린 나이에</p>
                  <p>결혼을 했다</p>
                  <br/>
                  <p>결혼 생활도 오래가지 않았다</p>
                  <p>아들 둘만 얻어가지고</p>
                  <p>내 청춘은 그렇게 끝이 났다</p>
                  <p>내 나이 스물 아홉</p>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Audio1Myeong;
