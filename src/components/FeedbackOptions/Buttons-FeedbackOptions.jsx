
const Button = ({onHandleClick}) => {
    return (<>
        <button name="good" type="submit" onClick={onHandleClick}>
        Good
        </button>
    <button name="neutral" type="submit" onClick={onHandleClick}>
              Neutral
        </button>
      <button name="bad" type="submit" onClick={onHandleClick}>
              Bad
            </button></>
    )
}
export default Button;