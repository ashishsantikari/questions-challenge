import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getQuestions } from "../../api";
import List from "../../components/List";
import Question from "../../components/Question";
import { question } from "../../helpers";

const Home = () => {
  const [questions, setQuestions] = useState([]);
  const history = useHistory();
  useEffect(() => {
    getQuestions().then((data) => {
      setQuestions(question.convertGetResponse(data));
    });
  }, []);

  const redirectToDetails = (id) => {
    history.push(`/detail/${id}`);
  };

  return (
    <div>
      <h1>Questions</h1>
      <List>
        {questions.map((question) => (
          <Question
            {...question}
            key={question.id}
            onClick={redirectToDetails}
          />
        ))}
      </List>
    </div>
  );
};

export default Home;
