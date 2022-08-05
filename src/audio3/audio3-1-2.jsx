import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/정다운(멋진나).m4a';
import logo from './img/DAALL_logo.jpeg';

function Audio3_1_2() {
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
            <p>제목 : 멋진 나</p>
            <p>작가 : 정다운</p>
            <div>
                <p>넌 한 번도 피질 않는거니
                  한창 나이에 엄마한테 듣던 말
                  난 이담에 훨 멋지게 피어날거야

                  정신없이 살다보니 어느새 황혼
                  그러나 이 나이에 마침내
                  어느 때보다 활짝 피어나려한다

                  아직도 내가 가진 것들에 감사하며
                  어제를 후회하고 내일을 근심하는
                  바보짓은 더 이상 안하리
                </p>
            </div>
        </div>
    </div>
  );
}

export default Audio3_1_2;
