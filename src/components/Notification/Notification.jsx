import styled from 'styled-components'

const Message = styled.p`
font-size:25px`

const Notification = ({message}) => {
    return  <Message >{message}</Message>;
}
export default Notification;