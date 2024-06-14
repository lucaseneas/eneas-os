
import './TurnOn.css'

function lightTurnOn() {
  const button = document.querySelector('#turnOnBackground')
  button.classList.add('turnOnBackgroundAnimation')
  setTimeout(() => {
    window.location.href = './eneas-os/home';
  }, 3000);
}

function TurnOn() {
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