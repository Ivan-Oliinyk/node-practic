const pushStar = (value: number, basic: number = 5) => {
  const res: string[] = [];

  for (let i = 0; 5 > res.length; i++) {
    if (res.length < value) {
      res.push("/images/star-fool.png");
    } else {
      res.push("/images/star-empty.png");
    }
  }

  return res;
};

export default pushStar;
