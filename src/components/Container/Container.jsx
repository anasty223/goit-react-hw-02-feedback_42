import styled from 'styled-components';

 const Div = styled.div`
  padding: 4em;
  background: biege;

`

export function Container({ children }) {
  return <Div >
    <h1>Please leave feedback</h1>
{children}</Div>;
}

export default Container;