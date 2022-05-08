import Notification from "../Notification/Notification";
import {List,Name} from './Statistics.styles'

const Statistics = ({good,neutral,bad,onCountTotalFeedback,countPositiveFeedbackPercentage,countTotalFeedback}) => {
    return <>
   { onCountTotalFeedback ? (<List>
          <li>
            {<Name>Good: {good}</Name>}

          </li>
          <li>
            <Name>Neutral: {neutral}</Name>
          
          </li>
          <li>
            {<Name>Bad: {bad}</Name>}
     
        </li>
        <li>
            <Name>Positive feedback:{countPositiveFeedbackPercentage()} % </Name>

        </li>
        <li>
            <Name>Total feedback: {countTotalFeedback()} </Name>
        </li>
    </List>): ( <Notification message="There is no feedback" />)}
    </>
}
export default Statistics;