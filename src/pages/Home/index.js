import React, { useEffect, useState } from "react";
import { getQuestions } from "../../api";
import List from "../../components/List";
import Question from "../../components/Question";

const Home = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    getQuestions().then(setQuestions);
  }, []);

  return (
    <div>
      <h1>Questions</h1>
      <List>
        {questions.map((question) => (
          <Question {...question} key={question.url} />
        ))}
      </List>
    </div>
  );
};

export default Home;
