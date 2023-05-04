const handler = async (req, res) => {
  fetch("https://iriko.testing.huddle01.com/api/v1/create-room", {
    method: "POST",
    body: JSON.stringify({
      title: req.body.title,
      tokenType: req.body.tokenType,
      chain: req.body.chain,
      contractAddress: [req.body.contractAddress],
    }),
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "Lgiukg7CvVMxgdlMRUnOGoWqzRmBv85i",
    },
  }).then((response) => {
    response.json().then((data) => {
      res.status(200).json(data);
    });
  });
};

export default handler;
