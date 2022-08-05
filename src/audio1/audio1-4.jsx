import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/채수원3.m4a';
import logo from './img/DAALL_logo.jpeg';

function Audio1_4() {
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
            <p>제목 : 청춘은 도전한다</p>
            <p>작가 : 원복순</p>
            <div>
                <p>길가에 붙어있는 포스터 하나
                  극장 아나운서 모집
                  나는 시험을 보기로 했다
                  접수를 하고 돌아서는 뒤통수에
                  비수처럼 꽃이는 말씀

                  시골학교 출신이 무얼 한다고
                  나는 못 들은 척 했다
                  한명씩 대본을 받고 영사실로 갔다
                  스피커에서 들려오는 합격 소식
                  내 이름이었다

                  스물 넷에 또 하나의 이름
                  극장 아나운서
                  도전을 안했더면 후회할 뻔 했다
                  청춘은 도전한다
                  되고 안되고는 중요치 않다
                </p>
            </div>
        </div>
    </div>
  );
}

export default Audio1_4;
