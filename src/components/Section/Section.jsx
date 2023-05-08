import PropTypes from 'prop-types';
import { SectionContainer, SectionTitle } from './Section.styled';

export const Section = ({ title, children, shadow }) => {
  return (
    <SectionContainer shadow={shadow}>
        <SectionTitle>{title}</SectionTitle>
        {children}
    </SectionContainer>)  
  
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  shadow: PropTypes.string,
};