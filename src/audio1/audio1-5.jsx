import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/채수원3.m4a';
import logo from './img/DAALL_logo.jpeg';

function Audio1Kim() {
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
            <div>
              <p>제목 : 청춘</p>
              <p>작가 : 김보경</p>
            </div>
            <div>
                <p>서울역 뒤엔 마구간이 많았다</p>
                <p>마차에 짐을 실고 내리니</p>
                <p>지금은 흔적도 없이 사라져 그리움을 자아낸다</p>
                <br/>
                <p>많이 놀고 즐기기만 한 청춘 시절</p>
                <p>기타 배우면서 친구들과 야외에서 춤추던 추억</p>
                <br/>
                <p>친구들과 음악다방 디쉐네 다니면서</p>
                <p>낙엽따라 가버린 사랑을 많이 들었던 기억</p>
                <p>어느 소녀에게 바친 사랑 외 다른 팝송들</p>
                <p>무교동엔 많은 낙지집이 있었지</p>
                <br/>
                <p>근숙 혜성 복임 봉순 어울려 다니던 기억</p>
                <p>청춘은 낙엽인 양 말라갔고</p>
                <p>지금은 어디서 무얼 하는지</p>
                <br/>
                <p>살아 있는 기억을 죽음같이 지우고</p>
                <p>떠난 사람을 그리워 한들 무엇하리</p>
                <p>만나면 헤어지는 것이 순리인것을</p>
            </div>
        </div>
    </div>
  );
}

export default Audio1Kim;
