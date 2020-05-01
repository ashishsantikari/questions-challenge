const formattedDate = (date) => {
  const dt = new Date(date);
  const mm = dt.getMonth();
  const dd = dt.getDate();
  const yyyy = dt.getFullYear();
  return [dd, mm, yyyy].join("-");
};

export { formattedDate };
