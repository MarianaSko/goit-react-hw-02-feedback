import { StyledSection, StyledHeading } from './Section.styled';

export const Section = ({ title, children }) => (
  <StyledSection>
    <StyledHeading>{title}</StyledHeading>
    {children}
  </StyledSection>
);
