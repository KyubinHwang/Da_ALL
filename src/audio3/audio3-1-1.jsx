import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/정다운(그대).m4a';
import logo from './img/DAALL_logo.jpeg';

function Audio3Jenog1() {
  return (
    <div className={styled.screen}>
        <div>
            <img className={styled.logo} src={logo} alt="img"/>
            <br/>
            <ReactAudioPlayer
                src={sound}
                autoPlay
                controls
                style={{
                  
                }}
            />
            <div>
              <p>제목 : 그대</p>
              <p>작가 : 정다운</p>
            </div>
            <div>
                <p>나를 온전히</p>
                <p>이해해주고</p>
                <p>보듬어 줄</p>
                <p>누군가를</p>
                <p>기다렸는데</p>
                <br/>
                <p>그대</p>
                <br/>
                <p>세상천지</p>
                <p>어디에</p>
                <p>계신지</p>
            </div>
        </div>
    </div>
  );
}

export default Audio3Jenog1;
