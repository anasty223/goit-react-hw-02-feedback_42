import { ButtonName } from './FeedbackOptions.styles'
const FeedbackOptions = ({options,onLeaveFeedback}) => {
   return (
    <ul>
      {options.map((option) => (
        <ButtonName
          type="button"
          key={option}
          onClick={onLeaveFeedback}
        
        >
          {option}
        </ButtonName>
      ))}
    </ul>
  );
    // return (<>
    //     <ButtonName name="good" type="submit" onClick={onHandleClick}>
    //     Good
    //     </ButtonName>
    // <ButtonName name="neutral" type="submit" onClick={onHandleClick}>
    //           Neutral
    //     </ButtonName>
    //   <ButtonName name="bad" type="submit" onClick={onHandleClick}>
    //           Bad
    //         </ButtonName></>
    // )
}
export default FeedbackOptions;