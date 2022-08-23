import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/원복순(갈대노인).m4a';
import logo from './img/DAALL_logo.jpeg';

function Audio5Bok() {
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
                <p style={{fontSize: '25px'}}>홀로 가족</p>
                <p style={{fontSize: '20px', textAlign: 'right'}}>원복순</p>
              </div>
              <div style={{textAlign: 'left'}}>
                  <p>예쁜 지붕위에 박이 세 통</p>
                  <p>그 박이 여물기도 전에</p>
                  <p>큰 줄기 하나가 끊었다</p>
                  <p>끊어질 듯한 줄기 하나가 고개를 들었다</p>
                  <br/>
                  <p>영양도 부족하고 사랑도 부족했다</p>
                  <p>햇빛과 바람과 세월이 길러줬다</p>
                  <p>아이들은 잘 잘라주었고</p>
                  <p>건강한 둥지를 만들어 떠났다</p>
                  <br/>
                  <p>나는 부자다 손자 손녀가 여덟</p>
                  <p>하지만 나는 가족이 없다</p>
                  <p>아들레가 오면 가족이고 가면 남이다</p>
                  <p>나는 홀로 가족이다</p>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Audio5Bok;
