const CardButton = ({drawCard}) => {
    const handleClick = () => {
        const id = setInterval( async () => {await drawCard()}, 1000)
        console.log(`Interval id is ${id}`)
    }
    return(
        <button onClick={handleClick}>Game A Card</button>
    )
}

export default CardButton;
