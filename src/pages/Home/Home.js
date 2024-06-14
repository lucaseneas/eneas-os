
import IconMeuPortifolio from './../../images/IconWorkspace/meu-portifolio.png'
import IconNarutoCard from './../../images/IconWorkspace/naruto-card.png'
import IconGitHub from './../../images/IconWorkspace/gitHub.png'
import IconLinkedIn from './../../images/IconWorkspace/linkedIn.png'
import ProfileImage from './../../images/profileImage.png'

import IconWorkspace from '../../components/IconWorkspace/IconWorkspace';
import './Home.css'
import React, { useState, useEffect } from 'react';

function loginFadeOut() {
  const subSectionLogin = document.querySelector('#subSectionLogin')
  subSectionLogin.classList.add('fadeOut');
  setTimeout(() => {
    subSectionLogin.classList.add('displayNone');
  }, 2000);

}

function closeWindow() {
  const frame = document.querySelector('#iFrameDiv');
  frame.classList.remove('active')
}


function Home() {
  const [time, setTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
 
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };


  return (
    <section>
      <section id='subSectionLogin' className='subSectionLogin'>
        <img className='loginImg' src={ProfileImage}></img>
        <button onClick={loginFadeOut} className='loginButton'>Login</button>
        <div className='auxIconsDiv'>
          <a><img alt='internet' src='https://img.icons8.com/?size=100&id=40710&format=png&color=FFFFFF' /></a>
          <a><img alt='accessibility' src='https://img.icons8.com/?size=100&id=23608&format=png&color=FFFFFF' /></a>
          <a href='./eneas-os/home'><img alt='turn off' src='https://img.icons8.com/?size=100&id=15896&format=png&color=FFFFFF' /></a>
        </div>
      </section>
      <section className='workspace'>
        <div className='workspaceDiv'>
          <IconWorkspace name='Meu Portifólio' src={IconMeuPortifolio} action='frame' url='https://lucaseneas.github.io/meu-portifolio/'></IconWorkspace>
          <IconWorkspace name='Naruto Cards' src={IconNarutoCard} action='frame' url='https://lucaseneas.github.io/naruto-card/'></IconWorkspace>
          <IconWorkspace name='GitHub' src={IconGitHub} action='external' url='https://github.com/lucaseneas'></IconWorkspace>
          <IconWorkspace name='LinkedIn' src={IconLinkedIn} action='external' url='https://www.linkedin.com/in/lucas-eneas/'></IconWorkspace>
        </div>
        <div id='iFrameDiv' className='iFrameDiv'>
          <div className='topFrame'>
            <button onClick={closeWindow} className='topFrame-minimize-maximize'><img src='https://img.icons8.com/?size=100&id=15050&format=png&color=000000' /></button>
            <button className='topFrame-minimize-maximize'><img src='https://img.icons8.com/?size=100&id=KERvxIIUeDAL&format=png&color=000000' /></button>
            <button onClick={closeWindow} className='topFrame-close'><img src='https://img.icons8.com/?size=100&id=16248&format=png&color=000000' /></button>
          </div>
          <iframe id='iFrame' src="https://lucaseneas.github.io/meu-portifolio/"></iframe>
        </div>
      </section>
      <section className='taskBar'>
        <div className='taskBarIcons'>
          <img alt='Windows' className='taskBarIconsImg' src='https://img.icons8.com/?size=100&id=TuXN3JNUBGOT&format=png&color=000000'></img>
          <img alt='Windows explorer'className='taskBarIconsImg' src='https://img.icons8.com/?size=100&id=Jw9nt2gzEivq&format=png&color=000000'></img>
          <img alt='Microsoft Edge' className='taskBarIconsImg' src='https://img.icons8.com/?size=100&id=dGm9KIZPpukc&format=png&color=000000'></img>
          <img alt='Discord' className='taskBarIconsImg' src='https://img.icons8.com/?size=100&id=2mIgusGquJFz&format=png&color=000000'></img>
          <img alt='Google Chrome' className='taskBarIconsImg' src='https://img.icons8.com/?size=100&id=ejub91zEY6Sl&format=png&color=000000'></img>
          <img alt='Steam' className='taskBarIconsImg' src='https://img.icons8.com/?size=100&id=zNqjI8XKkCv0&format=png&color=000000'></img>
        </div>
        <div className='taskBarRightIcons'>
          <img alt='arrow' src='https://img.icons8.com/?size=100&id=15813&format=png&color=FFFFFF' />
          <img alt='volume' src='https://img.icons8.com/?size=100&id=14172&format=png&color=FFFFFF' />
          <img alt='internet' src='https://img.icons8.com/?size=100&id=40710&format=png&color=FFFFFF' />
          <img alt='battery' src='https://img.icons8.com/?size=100&id=14184&format=png&color=FFFFFF' />
          <div>
            <div>{formatTime(time)}</div>
            <div>{formatDate(currentDate)}</div>
          </div>
          <img alt='notify' src='https://img.icons8.com/?size=100&id=14180&format=png&color=FFFFFF' />

        </div>
      </section>
    </section>
  )
}

export default Home;
