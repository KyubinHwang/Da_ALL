import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/정다운(어머니).m4a';
import logo from './img/DAALL_logo.jpeg';

function Audio2Jeong() {
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
                <p style={{fontSize: '25px'}}>어머니</p>
                <p style={{fontSize: '20px', textAlign: 'right'}}>정다운</p>
              </div>
              <div style={{textAlign: 'left'}}>
                  <p>마흔 하고도 둘 늦은 나이에 날 낳으신 어머니</p>
                  <p>가세마저 기울어 산후조리도 변변히 못하시고</p>
                  <p>어린 아들 병치레에 편할 날이 없으셨다</p>
                  <br/>
                  <p>젊어 낳은 자식들에겐 엄격하기만 했던 어머니</p>
                  <p>형누나들에게 못다준 사랑 몰아 내게 주시고</p>
                  <p>막내 아들 뒷바라지로 당신은 챙길 틈이 없으셨다</p>
                  <br/>
                  <p>내 나이 마흔 하고도 일곱 어느덧 낼모래가 쉰인데</p>
                  <p>울 어머니 어디로 가셨나 천지에 자취가 없네</p>
                  <p>오늘도 그 모습 떠올리며 목메어 불러본다 어머니</p>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Audio2Jeong;
