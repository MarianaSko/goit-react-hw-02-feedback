import { nanoid } from 'nanoid';
import { StyledList, StyledBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StyledList>
      {options.map(item => (
        <li key={nanoid()}>
          <StyledBtn onClick={onLeaveFeedback} name={item}>
            {item}
          </StyledBtn>
        </li>
      ))}
    </StyledList>
  );
};
