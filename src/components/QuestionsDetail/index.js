import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px;
`;

const QuestionHeader = styled.h2``;
const Choices = styled.form`
  display: flex;
  flex-flow: column nowrap;
`;
const ChoiceRow = styled.div`
  width: 100%;
`;

const Option = styled.div`
  width: 50%;
`;

const Vote = styled.div`
  width: 25%;
`;

const QuestionDetail = ({ question, choices }) => {
  return (
    <Wrapper>
      <QuestionHeader>Question: {question} </QuestionHeader>
      <Choices>
        {choices.map((choice) => (
          <ChoiceRow>
            <Option>{choice.choice}</Option>
            <Vote>{choice.votes}</Vote>
          </ChoiceRow>
        ))}
      </Choices>
    </Wrapper>
  );
};

export default QuestionDetail;
