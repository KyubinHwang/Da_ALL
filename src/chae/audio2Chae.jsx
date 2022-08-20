import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/채수원(가족).m4a';
import logo from './img/DAALL_logo.jpeg';

function Audio2Chae() {
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
                <p style={{fontSize: '25px'}}>가족</p>
                <p style={{fontSize: '20px', textAlign: 'right'}}>채수원</p>
              </div>
              <div style={{textAlign: 'left'}}>
                  <p>눈내린 내리막</p>
                  <p>아빠 엄마 아기</p>
                  <p>손 잡고 간다</p>
                  <br/>
                  <p>조심 조심</p>
                  <br/>
                  <p>아기가 미끌</p>
                  <p>엄마 놀라며</p>
                  <p>끌어당긴다</p>
                  <br/>
                  <p>뾰족구두가 흔들대다</p>
                  <p>함께 뒤뚱</p>
                  <br/>
                  <p>놀란 아빠</p>
                  <p>엄마 안으며</p>
                  <p>아래 깔렸다</p>
                  <p>엄마 아기는 위에</p>
                  <br/>
                  <p>여보 괜찮아</p>
                  <p>아기가 까르르</p>
                  <p>아빠는 으흐흐</p>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Audio2Chae;
