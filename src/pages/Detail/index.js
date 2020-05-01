import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestionDetail } from "../../api";
import QuestionDetail from "../../components/QuestionsDetail";

const Detail = () => {
  const { questionId } = useParams();
  const [questionDetail, setQuestionDetail] = useState(null);

  useEffect(() => {
    getQuestionDetail(questionId).then(setQuestionDetail);
  }, [questionId]);

  return (
    <div>
      <h1>Questions Detail</h1>
      <QuestionDetail {...questionDetail} />
    </div>
  );
};

export default Detail;
