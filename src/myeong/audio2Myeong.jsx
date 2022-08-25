import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/원명화(할미꽃삶).mp3';
import logo from './img/DAALL_logo.jpeg';

function Audio2Myeong() {
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
                <p style={{fontSize: '25px'}}>할미꽃 삶</p>
                <p style={{fontSize: '20px', textAlign: 'right'}}>원명화</p>
              </div>
              <div style={{textAlign: 'left'}}>
                  <p>몇 번의 눈 비바람 세월이 지나가고</p>
                  <p>지금은 행복한 독거라는 노인으로 살고있다</p>
                  <p>늘 명절 잊지않고 찾아주는 자식들</p>
                  <p>생일 어버이 날이면 찾아주는 조촐한 가족파티</p>
                  <br/>
                  <p>궁금 할만하면 전화도 해주고</p>
                  <p>월급날이면 용돈도 가져와서 주고</p>
                  <p>국적 불분명한 새로운 음식도 맛보여주고</p>
                  <p>가족들 어른애 생일이면 초대해주고</p>
                  <p>아들 며느리 건강한 손자 손녀들</p>
                  <p>이웃 할머니들 불러서 차도 마시고</p>
                  <br/>
                  <p>나에게도 즐거웠던 옛날이 있었다</p>
                  <p>남들이 부러웠다는 재매끼리 차 마시며</p>
                  <p>옛날을 회상하며 즐길 수 있는</p>
                  <p>자유가 있어서 나는 좋다</p>
                  <p>핵가족 시대에 오늘도 나는</p>
                  <p>즐겁게 살고 있다</p>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Audio2Myeong;
