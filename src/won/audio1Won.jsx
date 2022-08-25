import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/원복순(청춘은 도전한다).mp3'
import logo from './img/DAALL_logo.jpeg';

function Audio1Bok() {
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
                <p style={{fontSize: '25px'}}>청춘은 도전한다</p>
                <p style={{fontSize: '20px', textAlign: 'right'}}>원복순</p>
              </div>
              <div style={{textAlign: 'left'}}>
                  <p>길가에 붙어있는 포스터 하나</p>
                  <p>극장 아나운서 모집</p>
                  <p>나는 시험을 보기로 했다</p>
                  <p>접수를 하고 돌아서는 뒤통수에</p>
                  <p>비수처럼 꽃이는 말씀</p>
                  <br/>
                  <p>시골학교 출신이 무얼 한다고</p>
                  <p>나는 못 들은 척 했다</p>
                  <p>한명씩 대본을 받고 영사실로 갔다</p>
                  <p>스피커에서 들려오는 합격 소식</p>
                  <p>내 이름이었다</p>
                  <br/>
                  <p>스물 넷에 또 하나의 이름</p>
                  <p>극장 아나운서</p>
                  <p>도전을 안했더면 후회할 뻔 했다</p>
                  <p>청춘은 도전한다</p>
                  <p>되고 안되고는 중요치 않다</p>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Audio1Bok;
