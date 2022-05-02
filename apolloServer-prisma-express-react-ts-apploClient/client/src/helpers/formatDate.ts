const formatDate = (value: string): string => {
  const date = new Date(value);
  const options: any = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Intl.DateTimeFormat("en-Us", options).format(date);
};

export default formatDate;
