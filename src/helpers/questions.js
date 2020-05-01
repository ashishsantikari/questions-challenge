const convertGetResponse = (apiResponse) => {
  return apiResponse.map(({ question, published_at, url, choices }) => {
    return {
      question,
      publishedAt: published_at,
      id: url.slice(url.lastIndexOf("/") + 1),
      choices: choices,
    };
  });
};

export { convertGetResponse };
