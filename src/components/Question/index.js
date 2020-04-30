import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const QuestionHeader = styled.h3``;
const Published = styled.span``;
const Choices = styled.ul`
  list-style-type: none;
`;

const Wrapper = styled.div`
  width: 350px;
  border: 1px solid gray;
  padding: 10px;
  margin: 10px;
`;

const Question = ({ question, publishedAt, choices }) => {
  const len = choices.length;
  const noOfChoiceStr = `${len} Choice(s)`;
  return (
    <Wrapper>
      <QuestionHeader>{question}</QuestionHeader>
      <Published>{publishedAt}</Published>
      <Choices>{noOfChoiceStr}</Choices>
    </Wrapper>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  choices: PropTypes.arrayOf(
    PropTypes.shape({
      choice: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
    })
  ),
};

export default Question;
