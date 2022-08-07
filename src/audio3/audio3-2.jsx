import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/채수원(당신께쓰고픈글).m4a';
import logo from './img/DAALL_logo.jpeg';

function Audio3Myeong() {
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
              <p>제목 : 풋사랑</p>
              <p>작가 : 원명화</p>
            </div>
            <div>
                <p>미군 부대 세탁소에 첫 출근 하던 날의 일이다</p>
                <p>문쪽이 시끄럽다 바라보니 군복 입은 왕자님이 서있다</p>
                <p>부대 통역관이란다 그는 나에게 닥아와서 말을 걸었다</p>
                <p>설레임과 떨림으로 대답을 할 수 없었다</p>
                <br/>
                <p>그는 그곳에 자주 왔다 그 가을 때면 모든 시선이</p>
                <p>나에게 쏠렸다</p>
                <br/>
                <p>그는 많은 말을 걸어와도 대답 대신 마음으로</p>
                <p>대신 한다 당신으로 해서 내 마음은 항상 셀렌다고</p>
                <p>그는 적극적으로 다가와서 짖굿게 말을 걸어왔다</p>
                <p>대답 대신 주름은 미소로 대답한다</p>
                <p>나를 바라보며 같이 웃어주던 사람</p>
                <br/>
                <p>그렇게 사라이 여무러 갈 무렵 그는 악마의</p>
                <p>밤길에 무참히 짓밟히고 어설픈 풋사랑은</p>
                <p>눈 내리던 그날 눈속에 묻히고 말보다</p>
                <p>가슴으로 주고 받던 육개월의 풋사랑이</p>
                <p>이렇게 긴세월 마음 시리도록 생각날 때가 있다</p>
                <br/>
                <p>그립다 가끔씩</p>
            </div>
        </div>
    </div>
  );
}

export default Audio3Myeong;
