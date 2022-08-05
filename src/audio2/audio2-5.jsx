import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/정다운(어머니).m4a';
import logo from './img/DAALL_logo.jpeg';

function Audio2_5() {
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
            <p>제목 : 어머니</p>
            <p>작가 : 김보경</p>
            <div>
                <p>어머니는 나의 영원한 신
                  가족을 사랑하는 마음은 그 무엇에
                  비할 수 없네 떠나 올때는 다시
                  못볼줄 서러웠는데…

                  또다른 가족을 만들고 나니
                  그곳의 어머니는 나를 너무 사랑해
                  또다른 정을 들여가며
                  이곳에 묻혀 생활하다보니
                  친어머니 보다 더 좋아지는 것은 
                  어쩔 수 없네

                  영원히 오래 같이 살줄 알았는데
                  어느새 모두 떠나고…

                  이제 어머니가 된 나
                  자식들도 떠나고 나니
                  두 어머니를 기리는 마음
                  가슴속 영원히 섬기는 신
                </p>
            </div>
        </div>
    </div>
  );
}

export default Audio2_5;
