import './IconWorkspace.css';

function openWindow(url){
   const frame = document.querySelector('#iFrameDiv');
   frame.classList.add('active')
   
   const iFrame = document.querySelector('#iFrame')
   iFrame.src = url
}

function iconButtonAction(action,url){
    if(action == "frame"){
        openWindow(url)
    }
    if(action == "external"){
        window.location.href = url
    }

}

function IconWorkspace(props){
    return(
    <button onClick={() => iconButtonAction(props.action,props.url)} className='iconWorkspace-buttom'>
        <img src={props.src}></img>
        <p>{props.name}</p>
    </button>
    )
}

export default IconWorkspace