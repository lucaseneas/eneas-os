import './Home.css'

function LoginFadeOut(){
    const subSectionLogin = document.querySelector('#subSectionLogin')
    subSectionLogin.classList.add('fadeOut');
    setTimeout(() => {
        subSectionLogin.classList.add('displayNone');
      }, 2000);
    
}

function Home(){
    return(
        <section>
            <section id='subSectionLogin' className='subSectionLogin'>
                <img className='loginImg' src='https://lucaseneas.github.io/meu-portifolio/static/media/aboutImage.9b18985cf129865a0217.png'></img>
                <button onClick={LoginFadeOut} className='loginButton'>Login</button>
                <div className='auxIconsDiv'>
                    <img src='https://img.icons8.com/?size=100&id=40710&format=png&color=FFFFFF'/>
                    <img src='https://img.icons8.com/?size=100&id=23608&format=png&color=FFFFFF'/>
                    <img src='https://img.icons8.com/?size=100&id=15896&format=png&color=FFFFFF'/>
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
                    <div>seta</div>
                    <div>seta</div>
                    <div>seta</div>
                    <div>seta</div>
                    <div>seta</div>
                    <div>seta</div>
                    <div>hora<p>data</p></div>
                </div>
            </section>
        </section>
    )
}

export default Home;
