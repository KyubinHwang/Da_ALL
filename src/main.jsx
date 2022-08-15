import React  from 'react'; 
import {  Link  } from 'react-router-dom';
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
                    <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
                        <img className={style.logo} src={logo} alt="img"/> 
                        <p style={{fontSize: "30px"}}>: 다 가득참</p>
                    </div>
                    <div className={style.bubbleLeft}>
                        <p>'다올'은 '다 가득참' 이라는 뜻의 순우리말로, 인생에 대한 이야기가 가득한 시니어들를 대상으로 오디오 시집을 제작하는 프로젝트입니다.</p>
                    </div>
                    <div className={style.bubbleLeft}>
                        <p>다올은 홍익대학교 인액터스 소속 프로젝트로 총 5명의 팀원으로(규빈, 은빈, 단하, 솔, 준서) 구성되어 있습니다.</p>
                        <p>인스타그램을 통해 다올에 대한 다양한 소식을 확인해주세요!!</p>
                    </div>
                </div>
                <div>
                    <p className={style.titleFont}>PainPoint</p>
                    <div className={style.bubbleRight}>
                        <p>대한민국의 노인 인구 중 72%는 '여가활동 부족형'으로 분류되어 노년기에 충분한 여가활동을 누리고 있지 못한 것으로 나타납니다.</p>
                    </div>
                </div>
                <div>
                    <p className={style.titleFont}>Insight</p>
                    <div className={style.bubbleLeft}>
                        <p>다올은 이러한 시니어들의 자아실현에 주목하며, 노인 복지센터 여가프로그램의 많은 수요를 확인하여 시니어들의 자아실현을 위한 여가 프로그램을 개발하고자 하였습니다.</p>
                    </div>
                </div>
                <div>
                    <p className={style.titleFont}>Content</p>
                    <div>
                        <div className={style.goAudio}>
                            <div style={{width:'40%'}}>
                                <p>정다운</p>
                                <div className={style.poemList}>
                                    <Link to="/audio1-1"><p>지금이 청춘</p></Link>
                                    <Link to="/audio2-1"><p>어머니</p></Link>
                                    <Link to="/audio3-1-1"><p>그대</p></Link>
                                    <Link to="/audio3-1-2"><p>멋진 나</p></Link>
                                </div>
                            </div>
                            <div style={{width:'40%'}}>
                                <p>원명화</p>
                                <div className={style.poemList}>
                                    <Link to="/audio1-2"><p>스물 아홉에 끝난 청춘</p></Link>
                                    <Link to="/audio2-2"><p>할미꽃 삶</p></Link>
                                    <Link to="/audio3-2"><p>풋사랑</p></Link>
                                </div>
                            </div>
                        </div>
                        <div className={style.goAudio}>
                            <div style={{width:'40%'}}>
                                <p>채수원</p>
                                <div className={style.poemList}>
                                    <Link to="/audio1-3"><p>데이타 복구도 된다는데</p></Link>
                                    <Link to="/audio2-3"><p>가족</p></Link>
                                    <Link to="/audio3-3"><p>당신께 쓰고픈 글</p></Link>
                                </div>
                           </div>
                            <div style={{width:'40%'}}>
                                <p>원복순</p>
                                <div className={style.poemList}>
                                    <Link to="/audio1-4"><p>청춘은 도전한다</p></Link>
                                    <Link to="/audio2-4"><p>새들의 합창</p></Link>
                                    <Link to="/audio3-4"><p>갈대 노인</p></Link>
                                </div>
                            </div>
                        </div>
                        <div className={style.goAudio}>
                            <div style={{width:'40%'}}>
                                <p>김보경</p>
                                <div className={style.poemList}>
                                    <Link to="/audio1-5"><p>청춘</p></Link>
                                    <Link to="/audio2-5"><p>어머니</p></Link>
                                    <Link to="/audio3-5"><p>당신</p></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.bubbleRight}>
                        <p>다올은 '시립용산노인 종합 복지관'과 함께 총 5분의 시니어작가들과 시집을 제작하였습니다.</p>
                    </div>
                    <div className={style.bubbleRight}>
                        <p>상단의 시니어 작가분들의 시 제목들을 클릭하여 작가분들의 음성들을 직접 청취해보세요!!</p>
                    </div>
                </div>
                <p style={{marginTop: '100px'}}>@daall_official__</p>
            </div>
        </>
    );
}

export default Main;