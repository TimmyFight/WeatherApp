const ActualTime = () => {
  const date = new Date();
  const actualTime =
    String(date.getHours()).padStart(2, "0") +
    ":" +
    String(date.getMinutes()).padStart(2, "0");
  return actualTime;
};

export default ActualTime;
