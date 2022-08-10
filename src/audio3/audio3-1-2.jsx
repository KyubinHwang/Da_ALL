import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/정다운(멋진나).m4a';
import logo from './img/DAALL_logo.jpeg';

function Audio3Jeong2() {
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
                <p style={{fontSize: '25px'}}>멋진 나</p>
                <p style={{fontSize: '20px', textAlign: 'right'}}>정다운</p>
              </div>
              <div style={{textAlign: 'left'}}>
                  <p>넌 한 번도 피질 않는거니</p>
                  <p>한창 나이에 엄마한테 듣던 말</p>
                  <p>난 이담에 훨 멋지게 피어날거야</p>
                  <br/>
                  <p>정신없이 살다보니 어느새 황혼</p>
                  <p>그러나 이 나이에 마침내</p>
                  <p>어느 때보다 활짝 피어나려한다</p>
                  <br/>
                  <p>아직도 내가 가진 것들에 감사하며</p>
                  <p>어제를 후회하고 내일을 근심하는</p>
                  <p>바보짓은 더 이상 안하리</p>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Audio3Jeong2;
