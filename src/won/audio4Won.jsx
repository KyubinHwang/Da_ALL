import React from 'react'; 
import styled from './Audio.module.css'
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/원복순(당신).mp3';
import logo from './img/DAALL_logo.jpeg';

function Audio4Bok() {
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
                <p style={{fontSize: '25px'}}>당신</p>
                <p style={{fontSize: '20px', textAlign: 'right'}}>원복순</p>
              </div>
              <div style={{textAlign: 'left'}}>
                <p>아까운 나이 마흔여섯</p>
                <p>잡지도 못하고 그렇게 보냈지</p>
                <p>갈일산 공원에 당신을 묻고 오던 날</p>
                <p>아빠는 하고 묻던 다섯 살</p>
                <p>막내딸이 벌써 오십</p>
                <p>그해 겨울은 춥고도 눈이 많이 왔지요</p>
                <br/>
                <p>정말 추운 겨울이었어요</p>
                <p>당신을 많이 원망했습니다</p>
                <p>나는 어떻게 하라고</p>
                <p>많은 세월이 흐르고 나서야</p>
                <p>당신께 고맙습니다</p>
                <p>당신 닮은 착한 아이들을 주고 가서</p>
                <br/>
                <p>날 만나거든 누구셔하고 묻지 말아요</p>
                <p>거울에 비친 내 모습에 나도 놀라니까요</p>
                <p>나는 간데없고</p>
                <p>머리가 하얀 뚱뗑이 할머니만 남았어요</p>
                <p>그래도 날 기억해 줘요</p>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Audio4Bok;
