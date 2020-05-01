import React from "react";
import styled, { css } from "styled-components";

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
  padding: 1rem;
  &:last-child {
    border-bottom: 1px solid black;
  }
  ${(props) =>
    props.isHeader &&
    css`
      font-weight: bold;
    `}
`;

const ActionsRow = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 1rem;
`;

const Option = styled.div`
  width: 75%;
`;

const Vote = styled.div`
  width: 25%;
`;

const Button = styled.button`
  outline: 1px solid green;
  padding: 0.5rem;
`;

const QuestionDetail = ({ question, choices }) => {
  return (
    <Wrapper>
      <QuestionHeader>Question: {question} </QuestionHeader>
      <Choices>
        <ChoiceRow isHeader>
          <Option>Choice</Option>
          <Vote># of Votes</Vote>
        </ChoiceRow>
        {choices &&
          choices.map((choice) => (
            <ChoiceRow key={choice.choice}>
              <Option>{choice.choice}</Option>
              <Vote>{choice.votes} Votes</Vote>
            </ChoiceRow>
          ))}
      </Choices>
      <ActionsRow>
        <Button>Save Vote</Button>
      </ActionsRow>
    </Wrapper>
  );
};

export default QuestionDetail;
