import PropTypes from 'prop-types';
import { Item, List } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) => {
  return (
    <List>
      <Item>
        Good:<span> {good}</span>
      </Item>
      <Item>
        Neutral: <span>{neutral}</span>
      </Item>
      <Item>
        Bad: <span>{bad}</span>
      </Item>
      <Item>
        Total: <span>{totalFeedback()}</span>
      </Item>
      <Item>
        Positive feedback: {positivePercentage()}%
      </Item>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
