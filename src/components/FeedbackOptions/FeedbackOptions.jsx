import PropTypes from 'prop-types';
import { OptionBtn, Options } from './FeedbackOptions.styled';


export const FeedbackOptions = ({options, updateStatistic}) => {
    <Options>
        {options.map(btn => (
            <OptionBtn key={btn} onClick={updateStatistic}>
                {btn}
            </OptionBtn>))};
    </Options>  
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateStatistic: PropTypes.func.isRequired,
};