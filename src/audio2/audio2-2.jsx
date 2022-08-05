import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/정다운(어머니).m4a';
import logo from './img/DAALL_logo.jpeg';

function Audio2_2() {
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
            <p>제목 : 할미꽃 삶</p>
            <p>작가 : 원명화</p>
            <div>
                <p>여기몇 번의 눈 비바람 세월이 지나가고
                  지금은 행복한 독거라는 노인으로 살고있다
                  늘 명절 잊지않고 찾아주는 자식들
                  생일 어버이 날이면 찾아주는 조촐한 가족파티
                  궁금 할만하면 전화도 해주고

                  월급날이면 용돈도 가져와서 주고
                  국적 불분명한 새로운 음식도 맛보여주고
                  가족들 어른애 생일이면 초대해주고
                  아들 며느리 건강한 손자 손녀들
                  이웃 할머니들 불러서 차도 마시고

                  나에게도 즐거웠던 옛날이 있었다
                  남들이 부러웠다는 재매끼리 차 마시며
                  옛날을 회상하며 즐길 수 있는
                  자유가 있어서 나는 좋다 핵가족 시대에
                  오늘도 나는 즐겁게 살고 있다다가
                </p>
            </div>
        </div>
    </div>
  );
}

export default Audio2_2;
