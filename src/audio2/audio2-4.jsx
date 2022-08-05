import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/원복순(새들의합창).m4a';
import logo from './img/DAALL_logo.jpeg';

function Audio2_4() {
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
            <p>제목 : 새들의 합창</p>
            <p>작가 : 원복순</p>
            <div>
                <p>그늘이 좋은 나무 한 그루
                  철없이 날아든 새는 둥지를 틀었지
                  나무는 가족이 생겼다며 사랑으로 품었지
                  바람도 막아주고 햇볕도 가려주던 나무는
                  어느 추운 겨울 세찬 바람에 
                  쓰러지고 말았지

                  나무에서 떨어진 둥지는 바닥에 딩굴고
                  찬 바람을 맞아야 했지
                  어미새는 둥지를 감싸고 말했지
                  아가들아 아프지 말고 빨리 자라
                  높이 날아야 한다
                  이 겨울이 지나면 따뜻한 봄이 온단다
                </p>
            </div>
        </div>
    </div>
  );
}

export default Audio2_4;
