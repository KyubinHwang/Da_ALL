import React  from 'react'; 
// import {  Routes, Route, BrowserRouter  } from 'react-router-dom';
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled';
import logo from './DAALL_logo.jpeg';
import style from './main.module.css';
import { FiChevronsDown } from 'react-icons/fi';

const floating = keyframes`
    0 {
        transform: translateY(0);    
    }
    50% {
        transform: translateY(-15px);
    }
    100% {
        transform: translateY(0);
    }
`
const ScrollDiv = styled.div({
    position: 'absolute',
    bottom: '0%',
    width: '100%',
    animation: `${floating} 2s ease infinite`,
}); 

function Main(){
    return(
        <>
            <div className={style.mainscreen}>
                <div className={style.header}>
                    <img className={style.logo} src={logo} alt="img"/>
                    <br/>
                    이야기를 담아, 삶을 담아
                </div>
                <ScrollDiv>
                    다올 더 알아보기
                    <br/>
                    <FiChevronsDown/>
                </ScrollDiv>
            </div>
            <div className={style.contentScreen}>
                <div>
                    <p className={style.titleFont}>Team DaALL</p>
                    <div className={style.bubbleLeft}>
                        '다올'은 '다 가득참' 이라는 뜻의 순우리말로, 인생에 대한 이야기가 가득한 시니어들를 대상으로 오디오 시집을 제작하는 프로젝트입니다.
                    </div>
                    <div className={style.bubbleLeft}>
                        다올은 홍익대학교 인액터스 소속 프로젝트로 총 5명의 팀원으로(규빈, 은빈, 단하, 솔, 준서) 구성되어 있습니다.
                        <br/>
                        인스타그램을 통해 다올에 대한 다양한 소식을 확인해주세요!
                    </div>
                </div>
                <div>
                    <p className={style.titleFont}>PainPoint</p>
                    <div className={style.bubbleRight}>
                        대한민국의 노인 인구 중 72%는 '여가활동 부족형'으로 분류되어 노년기에 충분한 여가활동을 누리고 있지 못한 것으로 나타납니다.
                    </div>
                </div>
                <div>
                    <p className={style.titleFont}>Insight</p>
                    <div className={style.bubbleLeft}>
                        다올은 이러한 시니어들의 자아실현에 주목하며, 노인 복지센터 여가프로그램의 많은 수요를 확인하여 시니어들의 자아실현을 위한 여가 프로그램을 개발하고자 하였습니다.
                    </div>
                </div>
                <div>
                    <p className={style.titleFont}>Solution</p>
                    <div>
                        <div className={style.goAudio}>
                            <p>정다운</p>
                            <p>원명화</p>
                            <p>채수원</p>
                        </div>
                        <div className={style.goAudio}>
                            <p>원복순</p>
                            <p>김보경</p>
                        </div>
                    </div>
                    <div className={style.bubbleRight}>
                        다올은 '시립용산노인 종합 복지관'과 함께 총 5분의 시니어작가들과 시집을 제작하였습니다.
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;