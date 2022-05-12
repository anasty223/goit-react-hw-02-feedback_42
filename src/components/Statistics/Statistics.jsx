import Notification from "../Notification/Notification";
import {List,Name} from './Statistics.styles'

const Statistics = ({good,neutral,bad,countTotal,positiveFeedback }) => {
    return <>
   { countTotal ? (<List>
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
            <Name>Positive feedback:{positiveFeedback } % </Name>

        </li>
        <li>
            <Name>Total feedback: {countTotal} </Name>
        </li>
    </List>): ( <Notification message="There is no feedback" />)}
    </>
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;