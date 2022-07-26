import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/채수원3.m4a';
import logo from './img/DAALL_logo.jpeg';

function Audio3_2() {
  return (
    <div className={styled.screen}>
        <div>
            <img className={styled.logo} src={logo}/>
            <br/>
            <ReactAudioPlayer
                src={sound}
                autoPlay
                controls
            />
            <p>제목 : </p>
            <p>작가 : 원명화</p>
            <div>
                <p>여기다가</p>
                <p>시 행 연에 따라서</p>
                <p>텍스트 작성해서</p>
                <p>배치하기??</p>
            </div>
        </div>
    </div>
  );
}

export default Audio3_2;
