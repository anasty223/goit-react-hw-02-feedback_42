import Notification from "../Notification/Notification";

const Statistics = ({good,neutral,bad,countTotalFeedback}) => {
    return <>
   { countTotalFeedback ? (<ul>
          <li>
            {<p>Good: {good}</p>}

          </li>
          <li>
            <p>Neutarl: {neutral}</p>
          
          </li>
          <li>
            {<p>Bad: {bad}</p>}
     
          </li>
    </ul>): ( <Notification message="There is no feedback" />)}
    </>
}
export default Statistics;