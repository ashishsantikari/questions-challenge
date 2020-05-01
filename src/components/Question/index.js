import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { date } from "../../util";

const QuestionHeader = styled.h3`
  margin-bottom: 1rem;
`;
const Published = styled.h4`
  margin-bottom: 1rem;
`;
const Choices = styled.ul`
  margin-bottom: 1rem;
  list-style-type: none;
`;

const Wrapper = styled.div`
  width: 30%;
  border: 1px solid gray;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Question = ({ question, id, publishedAt, choices, onClick }) => {
  const len = choices.length;
  const noOfChoiceStr = `${len} Choice(s)`;
  return (
    <Wrapper onClick={() => onClick(id)}>
      <QuestionHeader>{question}</QuestionHeader>
      <Published>Published On {date.formattedDate(publishedAt)}</Published>
      <Choices>{noOfChoiceStr}</Choices>
    </Wrapper>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  choices: PropTypes.arrayOf(
    PropTypes.shape({
      choice: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};

export default Question;
