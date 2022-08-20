import React  from 'react'; 
import {  Link  } from 'react-router-dom';
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled';
import team from './image/team_Info.png';
import logo1 from './image/DAALL_logo.jpeg';
import logo2 from './image/logo.png';
import style from './main.module.css';
import { FiChevronsDown } from 'react-icons/fi';
import {BsGithub, BsInstagram} from 'react-icons/bs';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const linkInsta = () => {
    window.location.assign("https://www.instagram.com/daall_official__/")
}

const linkGithub = () => {
    window.location.assign("https://github.com/KyubinHwang/Da_ALL/")
}

function Main(){
    return(
        <>
            <div className={style.mainscreen}>
                <div className={style.header}>
                    <img className={style.logo} src={logo1} alt="img"/>
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
                <div style={{width: '85vw'}}> 
                    <p style={{marginTop :'150px', fontWeight : 'bold' , fontSize :'18px', textDecoration : 'underline'}}>대한민국의 노인 인구 중 72%는 <br/>
                        '여가활동 부족형'</p>
                    <p style={{marginTop :'50px', textAlign: 'right', fontWeight : 'bold' , fontSize :'18px', textDecoration : 'underline'}}>노년기에 충분한 여가활동을 <br/>
                        누리고 있지 못한다.</p> 
                    <p style={{marginTop :'100px'}}>'다올'은 시니어들의 자아실현에 주목합니다.</p>
                    <p>시니어들의 자아실현을 위한 <br/>
                        여가 프로그램을 진행합니다.</p>
                    <div className={style.boxDiv}>
                        <img className={style.logo} src={logo2} alt="img"/> 
                        <p style={{fontSize: "30px"}}>: 다 가득참</p>
                    </div>
                    <label style={{marginTop :'100px'}}>'다올'은 <br/>
                    <label style={{fontWeight :'bold' , fontSize :'18px'}}>인생에 대한 이야기가 가득한</label><br/>
                        시니어들의 이야기를 시집으로 제작합니다.</label>
                    <p>'시립용산노인 종합 복지관'과 협업하여<br/>
                        총 5분의 시니어작가들과 함께합니다!!</p>
                </div>
                <div style={{marginTop:'150px', marginBottom : '100px' , width: '85vw'}}>
                    <p className={style.titleFont}>시를 직접 들어보세요!!</p>
                    <Slider dots={true} slidesToShow={1} className={style.slick_list}>
                        <div className={style.card}>
                            <p style={{fontWeight : 'bold', color : 'white'}}>#1 정다운</p>
                            <Link to="/audio1-1">
                                <button className={style.tag}>
                                    지금이 청춘
                                </button>
                            </Link>
                            <br/>
                            <Link to="/audio2-1">
                                <button className={style.tag}>
                                    어머니
                                </button>
                            </Link>
                            <br/>
                            <Link to="/audio3-1-1">
                                <button className={style.tag}>
                                    그대
                                </button>
                            </Link>
                            <br/>
                            <Link to="/audio3-1-1">
                                <button className={style.tag}>
                                    멋진 나
                                </button>
                            </Link>
                            <br/>
                        </div>
                        <div className={style.card}>
                            <p style={{fontWeight : 'bold', color : 'white'}}>#2 원명화</p>
                            <Link to="/audio1-2">
                                <button className={style.tag}>
                                    스물 아홉에 끝난 청춘
                                </button>
                            </Link>
                            <br/>
                            <Link to="/audio2-2">
                                <button className={style.tag}>
                                    할미꽃 삶
                                </button>
                            </Link>
                            <br/>
                            <Link to="/audio3-2">
                                <button className={style.tag}>
                                    풋사랑
                                </button>
                            </Link>
                            <br/>
                        </div>
                        <div className={style.card}>
                            <p style={{fontWeight : 'bold', color : 'white'}}>#3 채수원</p>
                            <Link to="/audio1-3">
                                <button className={style.tag}>
                                    데이타 복구도 된다는데
                                </button>
                            </Link>
                            <br/>
                            <Link to="/audio2-3">
                                <button className={style.tag}>
                                    가족
                                </button>
                            </Link>
                            <br/>
                            <Link to="/audio3-3">
                                <button className={style.tag}>
                                    당신께 쓰고픈 글랑
                                </button>
                            </Link>
                            <br/>
                        </div>
                        <div className={style.card}>
                            <p style={{fontWeight : 'bold', color : 'white'}}>#4 원복순</p>
                            <Link to="/audio1-4">
                                <button className={style.tag}>
                                    청춘은 도전한다
                                </button>
                            </Link>
                            <br/>
                            <Link to="/audio2-4">
                                <button className={style.tag}>
                                    새들의 합창
                                </button>
                            </Link>
                            <br/>
                            <Link to="/audio3-4">
                                <button className={style.tag}>
                                    갈대 노인
                                </button>
                            </Link>
                            <br/>
                        </div>
                        <div className={style.card}>
                            <p style={{fontWeight : 'bold', color : 'white'}}>#5 김보경</p>
                            <Link to="/audio1-5">
                                <button className={style.tag}>
                                    청춘
                                </button>
                            </Link>
                            <br/>
                            <Link to="/audio2-5">
                                <button className={style.tag}>
                                    어머니
                                </button>
                            </Link>
                            <br/>
                            <Link to="/audio3-5">
                                <button className={style.tag}>
                                    당신
                                </button>
                            </Link>
                            <br/>
                        </div>
                    </Slider>
                    <p style={{marginTop:'50px'}}>시니어 작가분들의 시들을 클릭하고<br/>
                        작가분들의 음성들을 직접 청취해보세요!!</p>
                    
                    <img className={style.team} src={team} alt="img"/> 
                    <label style={{marginTop :'100px'}}>'다올'은 <br/>
                        <label style={{fontWeight :'bold', fontSize :'18px'}}>홍익대학교 '인액터스'</label> 소속 프로젝트입니다.</label>
                    <p>인스타그램을 통해 <br/>
                        다올에 대한 다양한 소식을 확인해주세요!!</p>
                        <button className={style.tag} onClick={linkInsta}>🔥 소식 확인하러 가기 🔥</button>
                </div>
                
            </div>
            <div className={style.endDiv}>
                <div style={{display: 'flex', justifyContent :'center'}}>
                    <BsGithub onClick={linkGithub} style={{color : 'white', marginRight : '10px', fontSize :'25px'}}/>
                    <BsInstagram onClick={linkInsta} style={{color : 'white', marginLeft : '10px', fontSize :'25px'}}/>
                </div>
                <p style={{color :'white'}}>@daall_official__</p>
            </div>
        </>
    );
}

export default Main;