import { ButtonName } from './Button-FeedbackOptions.styles'
const Button = ({onHandleClick}) => {
    return (<>
        <ButtonName name="good" type="submit" onClick={onHandleClick}>
        Good
        </ButtonName>
    <ButtonName name="neutral" type="submit" onClick={onHandleClick}>
              Neutral
        </ButtonName>
      <ButtonName name="bad" type="submit" onClick={onHandleClick}>
              Bad
            </ButtonName></>
    )
}
export default Button;