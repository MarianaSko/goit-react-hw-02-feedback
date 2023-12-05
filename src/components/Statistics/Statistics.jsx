import { StyledList, StyledSpan } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StyledList>
      <li>
        <p>
          <StyledSpan>Good:</StyledSpan> {good}
        </p>
      </li>
      <li>
        <p>
          <StyledSpan>Neutral:</StyledSpan> {neutral}
        </p>
      </li>
      <li>
        <p>
          <StyledSpan>Bad:</StyledSpan> {bad}
        </p>
      </li>
      <li>
        <p>
          <StyledSpan>Total:</StyledSpan> {total}
        </p>
      </li>
      <li>
        <p>
          <StyledSpan>Positive feedback:</StyledSpan> {positivePercentage}%
        </p>
      </li>
    </StyledList>
  );
};
