import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/김보경(당신).mp3';
import logo from './img/DAALL_logo.jpeg';

function Audio3Kim() {
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
                <p style={{fontSize: '25px'}}>당신</p>
                <p style={{fontSize: '20px', textAlign: 'right'}}>김보경</p>
              </div>
              <div style={{textAlign: 'left'}}>
                  <p>그리움도 소용없는 당신</p>
                  <p>지금은 아무도 없는 세상</p>
                  <p>가슴 아파 눈물로 기다린다</p>
                  <br/>
                  <p>살아서 붙잡지 못한 당신</p>
                  <p>인연이 무덤꽃으로 피면</p>
                  <p>별이 되어 눈뜨는 영혼</p>
                  <p>나의 당신은 여기가 끝인가</p>
                  <br/>
                  <p>죽어서도 잊지 못할 사랑의 무덤꽃</p>
                  <p>바람 불어 떠도는 마음</p>
                  <p>나의 그리움 지금이 끝인가</p>
                  <br/>
                  <p>말 못할 슬픔을 짊어지고</p>
                  <p>그리움 헤집는 당신은 누구</p>
                  <p>떠난 사람 미워 하지 말자</p>
                  <p>잘못을 용서하고</p>
                  <p>상처를 아물게 하는 건</p>
                  <p>세월이었다</p>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Audio3Kim;
