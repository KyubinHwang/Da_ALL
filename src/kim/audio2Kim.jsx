import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/김보경(가족).mp3';
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
                <p style={{fontSize: '25px'}}>가족</p>
                <p style={{fontSize: '20px', textAlign: 'right'}}>김보경</p>
              </div>
              <div style={{textAlign: 'left'}}>
                  <p>집 앞 소나무</p>
                  <p>아무도 거들떠보지 않는 나뭇가지</p>
                  <p>장맛비 엄청나게 퍼붓고 있는데</p>
                  <p>배고파 우는가 많은 새의 목소리가 들렸다</p>
                  <br/>
                  <p>새들의 가족인가보다</p>
                  <p>자꾸만 신경 쓰여 나의 마음을 끌어당겼다</p>
                  <br/>
                  <p>비는 쉬지 않고 퍼부어 대고</p>
                  <p>유리창에 붙은 빗방울 보며</p>
                  <p>빗물은 감감없이 상처를 만들고</p> 
                  <br/>
                  <p>영물의 굴절에 휘어지는 시선은</p>
                  <p>어긋난 각도로 흘러가는 인생 같다</p>
                  <br/>
                  <p>가족도 각기 다른 길 가듯</p>
                  <p>장마통에 떠내려간 그리움</p>
                  <p>가슴은 유성처럼 짧게 적시네</p>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Audio2Kim;
