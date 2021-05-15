import React from 'react';
import emailjs from "emailjs-com";
import { Link } from 'react-scroll';
//import {useState} from 'react';
import homeImage from './images/homeImage.png';
import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.png';
import react from './images/react.png';
import jquery from './images/jquery.png';
import sass from './images/sass.png';
import java from './images/java.png';
import python from './images/python.png';
import baeminMockup from './images/BaeminMockup.png';
import node from './images/node.png';
import todo from './images/MBDMockup.png';
import higom from './images/higom.png';
import as from './images/as.png';




import './App.css';

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"></script>




function App() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_hvq0qsj', 'template_klt5vy8', e.target, 'user_4FSyvZxksaQvCCLM6WCIC')
      .then((result) => {
          alert("메일이 전송되었습니다.\n\n확인 후 연락 드리겠습니다.\n감사합니다 :)");
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  // let [글제목, 글제목변경] = useState('남자 코트 추천'); //['남자 코트 추천'...이라고 진짜 데이터가 들어가고,데이터를 수정하기 위한 <함수>]

  return (
    <div className="App">
      <div className="home-nav" id="home">      
        <div className="navbar-menu">
          <Link to="home" smooth={true} className="navbar-menu menu">Home</Link>
          <Link to="profile" smooth={true} className="navbar-menu menu">Profile</Link>
          <Link to="projects" smooth={true} className="navbar-menu menu">Project</Link>
          <Link to="contact" smooth={true} className="navbar-menu menu">Contact</Link>
        </div>
      </div>


      <div className="home_body">
        <img className="home_image" src={homeImage} alt="homeImage"></img>

        
        <div className="home_name">
          <div className="name">Hanna</div>
          <div className="name">Jung</div>
          <div className="portfolio">Portfolio</div>
        </div>
      </div>

    <div className="profile" id="profile">
      <div className="heading">Profile</div>
      <div className="subheading">정한나</div>
      <div className="university">한국뉴욕주립대학교 컴퓨터과학과 졸업</div>
      <div className="hanna_info">Tel: 010 3174 8953</div>
      <div className="hanna_info">E-mail: hanna@gmail.com</div>
      <div className="hanna_info">Portfolio: 주소</div> 
    </div>

    <div className="skills">
        <div className="heading">Skills</div>
        <div className="subheading">프론트엔드</div>
        <div className="skill">
          <div className="skill_name"><img className="skill_img" src={html} alt="html"></img>HTML</div>
          <div className="skill_name"><img className="skill_img" src={css} alt="css3"></img>CSS3</div>
          <div className="skill_name"><img className="skill_img" src={js} alt="js"></img>JavaScript</div>
          <div className="skill_name"><img className="skill_img" src={react} alt="react"></img>React</div>
          <div className="skill_name"><img className="skill_img" src={jquery} alt="jquery"></img>jQuery</div>
          <div className="skill_name"><img className="skill_img" src={sass} alt="sass"></img>SASS</div>
        </div>
        <div className="profile_subheading_backend">백엔드</div>
          <div className="skill">
          <div className="skill_name"><img className="skill_img" src={java} alt="java"></img>Java</div>
          <div className="skill_name"><img className="skill_img" src={python} alt="python"></img>python</div>
          <div className="skill_name"><img className="skill_img" src={node} alt="node"></img>Node.js</div>
          <div className="skill_name"><img className="skill_img" src={as} alt="as"></img>Android Studio</div>
        </div>
    </div>

    <div className="profile" id="projects">
      <div className="heading">Personal Projects</div>

      <div className="project">
        <div className="projects_left">
          <div className="subheading">배달의민족</div>
          <div className="projects_info">배달의민족 홈페이지 리뉴얼</div>
          <div className="projects_smallinfo">- 자동/메뉴얼 슬라이드</div>
          <div className="projects_smallinfo">- 플로팅 다운로드 버튼</div>
          <div className="projects_smallinfo">- 카드 더보기</div>
          <div className="projects_smallinfo">- 반응형 웹</div>
          <div className="button">
            <button onClick={() => window.open('https://github.com/hannajung/baemin', '_blank')} className="project_button">Github</button>
            <button onClick={() => window.open('https://hannajung.github.io/baemin/', '_blank')} className="project_button">View</button>
          </div>
        </div>
        <img className="baemin_mockup" src={baeminMockup} alt="baeminMockup"></img>

      </div>
    

      <div className="project2">
        <div className="todo_left">
          <img className="todo_mockup" src={todo} alt="todo"></img>
        </div>
        <div className="projects_right">
          <div className="subheading">MyDiary</div>
          <div className="projects_info">하루의 일정을 정리하는 투두리스트</div>
          <div className="projects_smallinfo">- 달력에서 날짜 선택</div>
          <div className="projects_smallinfo">- 일정 추가</div>
          <div className="projects_smallinfo">- 체크 박스</div>
          <div className="button">
            <button onClick={() => window.open('https://github.com/hannajung/BulletJournal', '_blank')} className="project_button">Github</button>
            <button className="project_button_not">준비중</button>
          </div>
        </div>
      </div>

      <div className="project2">
        <div className="projects_left">
          <div className="subheading">HiGom</div>
          <div className="projects_info">게임을 통해 배우는 영어 학습 앱</div>
          <div className="projects_smallinfo">- 카드 넘기기</div>
          <div className="projects_smallinfo">- 즐겨찾기</div>
          <div className="button">
            <button onClick={() => window.open('https://github.com/hannajung/HiGom', '_blank')} className="project_button">Github</button>
            <button className="project_button_not">준비중</button>
          </div>
        </div>
        <img className="higom_mockup" src={higom} alt="higom"></img>
      </div>

    </div>
          
      

      

      <div className="contact" id="contact">
        <div className="heading">Contact</div>
        <div className="contact_ex">문의사항 있으시면 아래 연락처로 연락이나 메일 바랍니다.</div>
      
        <div className="container">
          <div className="contact_info">
            <div className="contact_reach">Tel. 010 3174 8953</div>
          
            <div  className="contact_reach">E-mail. hanna4171@gmail.com</div>
          </div>
  


          <form className="contact-form" onSubmit={sendEmail}>
            <div className="contact1">
              <div className="contact_name">
                  <input type="text" className="form-control" placeholder="이름" name="name"/>
              </div>
              <div className="contact_email">
                  <input type="email" className="form-control" placeholder="메일 주소" name="email"/>
              </div>
              <div className="contact_message">
                  <textarea className="form-control_mail" id="" cols="30" rows="8" placeholder="보낼 내용" name="message"></textarea>
              </div>
              <div className="contact_send">
                  <input type="submit" className="sendButton" value="보내기"></input>
              </div>
            </div>
          </form>
        </div>

      </div>

    </div>//App
  );
}

export default App;
