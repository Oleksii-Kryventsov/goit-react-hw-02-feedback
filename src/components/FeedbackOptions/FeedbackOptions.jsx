import PropTypes from 'prop-types';
import { OptionBtn, OptionItem, Options } from './FeedbackOptions.styled';


export const FeedbackOptions = ({ options, updateStatistic }) => {
    return (
    <Options>
        {options.map(option => (
            <OptionItem key={option}>
                <OptionBtn type="button"
            typeName={option}
            onClick={() => updateStatistic(option)}>
                     {option}
                </OptionBtn>
            </OptionItem>))}
    </Options>
    ) 
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateStatistic: PropTypes.func.isRequired,
};