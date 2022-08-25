import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/원명화(반쪽우산).mp3';
import logo from './img/DAALL_logo.jpeg';

function Audio1Myeong() {
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
              <p style={{fontSize: '25px'}}>반쪽 우산</p>
              <p style={{fontSize: '20px', textAlign: 'right'}}>원명화</p>
            </div>
            <div style={{textAlign: 'left'}}>
                <p>반쪽 우산속에서 자란 두 그루의 나무</p>
                <p>햇 볕이 그리우면 햇 볕을 바라보고</p>
                <p>그늘이 필요하면 햇 볕을 가리고</p>
                <p>스스로 성장하는 법을 터득하며 잘 자라주었다</p>
                <br/>
                <p>어느날 광풍에 큰 나무가 부러졌다</p>
                <p>앞음을 견디며 작은 나무는 씩씩하게 자랐다</p>
                <p>어느새 작은 나무는 반쪽 우산을 벗어나서</p>
                <p>자기만의 큰 우산으로 가족을 보호하고 있었다</p>
                <br/>
                <p>오늘도 어느 교정에서 큰 나무가 되어</p>
                <p>사춘기 꿈나무를 사랑으로 지키며</p>
                <p>꿋꿋하게 서있다</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Audio1Myeong;
