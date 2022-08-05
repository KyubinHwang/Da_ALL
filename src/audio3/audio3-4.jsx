import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/원복순(갈대노인).m4a';
import logo from './img/DAALL_logo.jpeg';

function Audio3_4() {
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
            <p>제목 : 갈대 노인</p>
            <p>작가 : 원복순</p>
            <div>
                <p>꽃이 핀다 예쁜 꽃 들이 피었다
                  내 머리에도 하얀 갈대 꽃이 피었다
                  갈대 꽃은 석양에 더 빛나지

                  젊어서는 하히힐 굽이 높아지고
                  늙어서는 지팡이 길이가 짧아진다
                  이런줄 알았으면 힘을 조금 남겨 둘것을

                  아침에 피었던 예쁜 꽃도
                  저녁이 되면 고개를 떨군다
                  지려나 보다

                  빛나던 청춘도 쉬임없이 달려
                  어느새 노인 역에 도착
                  모두 평화로워 보인다

                  갈대 할머니
                  오늘도 해피데이
                </p>
            </div>
        </div>
    </div>
  );
}

export default Audio3_4;
