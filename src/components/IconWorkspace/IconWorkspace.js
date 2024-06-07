import './IconWorkspace.css';

function openWindow(url){
   const frame = document.querySelector('#iFrameDiv');
   frame.classList.add('active')
   
   const iFrame = document.querySelector('#iFrame')
   iFrame.src = url
}

function closeWindow(){
    const frame = document.querySelector('#iFrameDiv');
    frame.classList.remove('active')
}

function IconWorkspace(props){
    return(
    <button onClick={() => openWindow(props.url)} className='iconWorkspace-buttom'>
        <img src={props.src}></img>
        <p>{props.name}</p>
    </button>
    )
}

export default IconWorkspace