import styled from '@emotion/styled';

export const Options = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

export const OptionItem = styled.li`
list-style:none;
`

export const OptionBtn = styled.button`
  font-size: 18px;
  min-width: 70px;
  background-color: #010101;
  color: #ffffff;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  text-transform: capitalize;

  &:hover {
    background-color: ${setColor};
  }
`;

function setColor(props) {
  switch (props.children) {
    case 'good':
      return 'rgb(62 133 23)';
    case 'neutral':
      return 'rgb(255 255 0)';
    case 'bad':
      return 'rgb(222 80 80)';
    default:
      return '#000';
  }
}