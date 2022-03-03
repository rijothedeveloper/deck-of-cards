import { useEffect } from "react"

const CardButton = ({drawCard}) => {
    let timerId;
    useEffect(() => {
      return () => clearTimeout(timerId)
      }, []);
    
    const handleClick = () => {
        timerId = setInterval( async () => {await drawCard()}, 1000)
    }
    return(
        <button onClick={handleClick}>Game A Card</button>
    )
}

export default CardButton;
