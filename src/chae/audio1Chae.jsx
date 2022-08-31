import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/채수원(데이타복구도된다는데).m4a';
import logo from './img/DAALL_logo.jpeg';

function Audio1Chae() {
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
                <p style={{fontSize: '25px'}}>데이타 복구도 된다는데</p>
                <p style={{fontSize: '20px', textAlign: 'right'}}>채수원</p>
              </div>
              <div style={{textAlign: 'left'}}>
                <p>부끄러워말고</p>
                <p>솔직해야 했는데</p>
                <p>톡 쏘는 그말들이</p>
                <p>가시는 아니었을 텐데</p>
                <p>그냥 믿고 말았어</p>
                <br/>
                <p>떠난다는 으름장이</p>
                <p>속마음인 줄 알고</p>
                <p>가슴 쓰린 이별을 한 거야</p>
                <br/>
                <p>붙들어 달라는 말인 줄</p>
                <p>그때는 몰랐어</p>
                <br/>
                <p>그녀와 나 사이에는</p>
                <p>많은 시간이 흘러가 버렸지</p>
                <br/>
                <p>다시 불러올 수는 없을까</p>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Audio1Chae;
