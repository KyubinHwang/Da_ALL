import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/채수원(가족).m4a';
import logo from './img/DAALL_logo.jpeg';

function Audio2_3() {
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
            <p>제목 : 가족</p>
            <p>작가 : 채수원</p>
            <div>
                <p>눈내린 내리막
                  아빠 엄마 아기
                  손 잡고 간다

                  조심 조심

                  아기가 미끌
                  엄마 놀라며
                  끌어당긴다

                  뾰족구두가 흔들대다
                  함께 뒤뚱

                  놀란 아빠
                  엄마 안으며
                  아래 깔렸다
                  엄마 아기는 위에

                  여보 괜찮아
                  아기가 까르르
                  아빠는 으흐흐
                </p>
            </div>
        </div>
    </div>
  );
}

export default Audio2_3;
