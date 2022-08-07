import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/원복순(새들의합창).m4a';
import logo from './img/DAALL_logo.jpeg';

function Audio2Bok() {
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
              <p>제목 : 새들의 합창</p>
              <p>작가 : 원복순</p>
            </div>
            <div>
                <p>그늘이 좋은 나무 한 그루</p>
                <p>철없이 날아든 새는 둥지를 틀었지</p>
                <p>나무는 가족이 생겼다며 사랑으로 품었지</p>
                <p>바람도 막아주고 햇볕도 가려주던 나무는</p>
                <p>어느 추운 겨울 세찬 바람에</p>
                <p>쓰러지고 말았지</p>
                <br/>
                <p>나무에서 떨어진 둥지는 바닥에 딩굴고</p>
                <p>찬 바람을 맞아야 했지</p>
                <p>어미새는 둥지를 감싸고 말했지</p>
                <p>아가들아 아프지 말고 빨리 자라</p>
                <p>높이 날아야 한다</p>
                <p>이 겨울이 지나면 따뜻한 봄이 온단다</p>
            </div>
        </div>
    </div>
  );
}

export default Audio2Bok;
