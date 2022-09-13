const ActualTime = () => {
  const date = new Date();
  const actualTime = date.getHours() + ":" + date.getMinutes();
  return actualTime;
};

export default ActualTime;
