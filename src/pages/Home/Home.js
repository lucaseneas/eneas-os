import './Home.css'
import React, { useState, useEffect } from 'react';

function LoginFadeOut(){
    const subSectionLogin = document.querySelector('#subSectionLogin')
    subSectionLogin.classList.add('fadeOut');
    setTimeout(() => {
        subSectionLogin.classList.add('displayNone');
      }, 2000);
    
}




function Home(){
    const [time, setTime] = useState(new Date());
    const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Limpa o intervalo quando o componente é desmontado
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


    return(
        <section>
            <section id='subSectionLogin' className='subSectionLogin'>
                <img className='loginImg' src='https://lucaseneas.github.io/meu-portifolio/static/media/aboutImage.9b18985cf129865a0217.png'></img>
                <button onClick={LoginFadeOut} className='loginButton'>Login</button>
                <div className='auxIconsDiv'>
                    <img alt='internet' src='https://img.icons8.com/?size=100&id=40710&format=png&color=FFFFFF'/>
                    <img alt='accessibility' src='https://img.icons8.com/?size=100&id=23608&format=png&color=FFFFFF'/>
                    <img alt='turn off' src='https://img.icons8.com/?size=100&id=15896&format=png&color=FFFFFF'/>
                </div>
            </section>

            <section className='taskBar'>
                <div className='taskBarIcons'>
                    <img className='taskBarIconsImg' src='https://img.icons8.com/?size=100&id=TuXN3JNUBGOT&format=png&color=000000'></img>
                    <img className='taskBarIconsImg' src='https://img.icons8.com/?size=100&id=Jw9nt2gzEivq&format=png&color=000000'></img>
                    <img className='taskBarIconsImg' src='https://img.icons8.com/?size=100&id=dGm9KIZPpukc&format=png&color=000000'></img>
                    <img className='taskBarIconsImg' src='https://img.icons8.com/?size=100&id=2mIgusGquJFz&format=png&color=000000'></img>
                    <img className='taskBarIconsImg' src='https://img.icons8.com/?size=100&id=ejub91zEY6Sl&format=png&color=000000'></img>
                    <img className='taskBarIconsImg'src='https://img.icons8.com/?size=100&id=zNqjI8XKkCv0&format=png&color=000000'></img>
                </div>
                <div className='taskBarRightIcons'>
                    <img alt='arrow' src='https://img.icons8.com/?size=100&id=15813&format=png&color=FFFFFF'/>
                    <img alt='volume' src='https://img.icons8.com/?size=100&id=14172&format=png&color=FFFFFF'/>
                    <img alt='internet' src='https://img.icons8.com/?size=100&id=40710&format=png&color=FFFFFF'/>
                    <img alt='battery' src='https://img.icons8.com/?size=100&id=14184&format=png&color=FFFFFF'/>
                    <div>
                        <div>{formatTime(time)}</div>
                        <div>{formatDate(currentDate)}</div>
                    </div>
                    <img alt='notify' src='https://img.icons8.com/?size=100&id=14180&format=png&color=FFFFFF'/>
                    
                </div>
            </section>
        </section>
    )
}

export default Home;
