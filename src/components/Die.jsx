import '../styles/Die.css'
export default function Die(props){
    function handleClick(){
        props.handle(props.id)
    }
    return <button className={props.isHeld ? "dice-held" : "dice"} onClick={handleClick}>{props.value}</button>
}