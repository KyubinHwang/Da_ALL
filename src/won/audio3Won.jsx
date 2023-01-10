import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/원복순(갈대노인).m4a';
import logo from './img/DAALL_logo.jpeg';

function Audio3Bok() {
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
                <p style={{fontSize: '25px'}}>갈대 노인</p>
                <p style={{fontSize: '20px', textAlign: 'right'}}>원복순</p>
              </div>
              <div style={{textAlign: 'left'}}>
                  <p>꽃이 핀다 예쁜 꽃들이 피었다</p>
                  <p>내 머리에도 하얀 갈대꽃이 피었다</p>
                  <p>갈대꽃은 석양에 더 빛나지</p>
                  <br/>
                  <p>젊어서는 하이힐 굽이 높아지고</p>
                  <p>늙어서는 지팡이 길이가 짧아진다</p>
                  <p>이런 줄 알았으면 힘을 조금 남겨 둘 것을</p>
                  <br/>
                  <p>아침에 피웠던 예쁜 꽃도</p>
                  <p>저녁이 되면 고개를 떨군다</p>
                  <p>지려나 보다</p>
                  <br/>
                  <p>빛나던 청춘도 쉬임없이 달려</p>
                  <p>어느새 노인 역에 도착</p>
                  <p>모두 평화로워 보인다</p>
                  <br/>
                  <p>갈대 할머니</p>
                  <p>오늘도 해피데이</p>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Audio3Bok;
