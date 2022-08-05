import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/정다운(그대).m4a';
import logo from './img/DAALL_logo.jpeg';

function Audio3_1_1() {
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
            <p>제목 : 그대</p>
            <p>작가 : 정다운</p>
            <div>
                <p>나를 온전히
                  이해해주고
                  보듬어 줄
                  누군가를
                  기다렸는데

                  그대

                  세상천지
                  어디에
                  계신지
                </p>
            </div>
        </div>
    </div>
  );
}

export default Audio3_1_1;
