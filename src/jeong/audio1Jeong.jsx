import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/정다운(지금이청춘).mp3';
import logo from './img/DAALL_logo.jpeg';

function Audio1Jeong() {
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
                <p style={{fontSize: '25px'}}>지금이 청춘</p>
                <p style={{fontSize: '20px', textAlign: 'right'}}>정다운</p>
              </div>
              <div style={{textAlign: 'left'}}>
                  <p>이십대 이전을 번뇌와 회의로</p>
                  <p>삼십대 이후는 살아내느라 흘려보냈다</p>
                  <br/>
                  <p>일흔이 훌쩍 넘은 지금</p>
                  <br/>
                  <p>이름모를 풀꽃 하나에 가슴 설레이고</p>
                  <p>파아란 하늘 조각 구름에 마냥 벅차다</p>
                  <br/>
                  <p>아- 난 지금이 청춘인가 보다</p>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Audio1Jeong;
