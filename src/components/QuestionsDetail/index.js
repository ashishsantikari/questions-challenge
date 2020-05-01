import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px;
`;

const QuestionHeader = styled.h2`
  margin-bottom: 30px;
`;
const Choices = styled.form`
  display: flex;
  flex-flow: column nowrap;
  border-left: 1px solid black;
  border-right: 1px solid black;
`;
const ChoiceRow = styled.div`
  display: flex;
  border-top: 1px solid black;
  padding: 10px;
  &:last-child {
    border-bottom: 1px solid black;
  }
`;

const Option = styled.div`
  width: 50%;
`;

const Vote = styled.div`
  width: 50%;
`;

const QuestionDetail = ({ question, choices }) => {
  return (
    <Wrapper>
      <QuestionHeader>Question: {question} </QuestionHeader>
      <Choices>
        {choices &&
          choices.map((choice) => (
            <ChoiceRow key={choice.choice}>
              <Option>{choice.choice}</Option>
              <Vote>{choice.votes}</Vote>
            </ChoiceRow>
          ))}
      </Choices>
    </Wrapper>
  );
};

export default QuestionDetail;
