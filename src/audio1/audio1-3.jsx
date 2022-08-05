import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/채수원3.m4a';
import logo from './img/DAALL_logo.jpeg';

function Audio1_3() {
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
            <p>제목 : 데이타 복구도 된다는데</p>
            <p>작가 : 채수원</p>
            <div>
                <p>부끄러워말고
                  솔직해야 했는데
                  톡 쏘는 그말들이
                  가시는 아니었을 텐데
                  그냥 믿고 말았어

                  떠난다는 으름장이
                  속마음인 줄 알고
                  가슴 쓰린 이별을 한 거야

                  붙들어 달라는 말인 줄
                  그때는 몰랐어

                  그녀와 나 사이에는
                  많은 시간이 흘러가 버렸지

                  다시 불러올 수는 없을까
                </p>
            </div>
        </div>
    </div>
  );
}

export default Audio1_3;
