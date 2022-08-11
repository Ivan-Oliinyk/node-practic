import request from "request";

export default (data) => {
  request.post(
    "http://localhost:5000/print",
    { json: { review: data } },
    function (error, response, body) {
      if (error) {
        console.log(error.message);
      }
    }
  );
};
