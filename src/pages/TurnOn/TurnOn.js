
import { useNavigate } from 'react-router-dom';
import './TurnOn.css'



function TurnOn() {
  const navigate = useNavigate();

  function lightTurnOn() {
    const button = document.querySelector('#turnOnBackground')
    button.classList.add('turnOnBackgroundAnimation')
    setTimeout(() => {
      navigate('./home');
    }, 3000);
  }

  return (
    <section id='turnOnBackground' className='turnOnBackground'>
      <button onClick={lightTurnOn} id='turnOnButton' className='turnOnButton'>
        <label>
          <input type="checkbox" /><i></i>
        </label>
      </button>
    </section>

  )
}

export default TurnOn;