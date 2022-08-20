import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/채수원(당신께쓰고픈글).m4a';
import logo from './img/DAALL_logo.jpeg';

function Audio3Chae() {
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
                <p style={{fontSize: '25px'}}>당신께 쓰고픈 글</p>
                <p style={{fontSize: '20px', textAlign: 'right'}}>채수원</p>
              </div>
              <div style={{textAlign: 'left'}}>
                  <p>차마 보내지 못한 편지</p>
                  <p>쓰레기통에 바쳤다</p>
                  <p>다시 쓴 것도</p>
                  <p>또 쓴 것도</p>
                  <p>밤 새도록 그 통에 넘쳤다</p>
                  <br/>
                  <p>무슨 말을 해야 할지</p>
                  <p>쓸 때 마다 생각이 달라졌다</p>
                  <p>그래서 보낼 수 없었다</p>
                  <br/>
                  <p>우체국까지 갔다</p>
                  <p>우표를 붙였다</p>
                  <p>그리고 넣을까 말까 망설였다</p>
                  <p>다시 돌아왔다</p>
                  <br/>
                  <p>내일 또 다시</p>
                  <p>쓰레기통은 넘칠 것이다</p>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Audio3Chae;
