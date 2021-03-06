class QueryParams {
  constructor() {
    this.__params = new Map();
  }

  addParam(key, value) {
    this.__params.set(key, value);
  }

  toString() {
    const arr = [];
    this.__params.forEach((value, key) => arr.push(`${key}=${value}`));
    return `?${arr.join("&")}`;
  }
}

const API_ROOT = "https://polls.apiblueprint.org";

const getQuestions = (num = 1) => {
  const queryParams = new QueryParams();
  queryParams.addParam("page", num);
  const url = `${API_ROOT}/questions${queryParams.toString()}`;
  return window.fetch(url).then((r) => r.json());
};

const getQuestionDetail = (questionId) => {
  const url = `${API_ROOT}/questions/${questionId}`;
  return window.fetch(url).then((r) => r.json());
};

export { getQuestions, getQuestionDetail };
