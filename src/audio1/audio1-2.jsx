import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/채수원3.m4a';
import logo from './img/DAALL_logo.jpeg';

function Audio1_2() {
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
            <p>제목 : 스물 아홉에 끝난 청춘</p>
            <p>작가 : 원명화</p>
            <div>
                <p>내가 살던 고향을
                  분명의 혜택이 없는
                  조용한 시골이었다
                  6.25 사변과 함께

                  아버지가 돌아가셨다
                  우리집은 일할 사람이 없는
                  나는 농사꾼이 되었다
                  거머리 무섭다고 논일을 피할 수 없고
                  했볕이 뜨겁다고 밭일을 피할 수 없고

                  사람의 손이 필요한 곳이면
                  어데인지 가야했다 3년이란
                  세월이 흐른뒤에 스므살 어린 나이에
                  결혼을 했다

                  결혼 생활도 오래가지 않았다
                  아들 둘만 얻어가지고
                  내 청춘은 그렇게 끝이 났다
                  내 나이 스물 아홉</p>
            </div>
        </div>
    </div>
  );
}

export default Audio1_2;
