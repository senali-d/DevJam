const handler = async (req, res) => {
  fetch("https://iriko.testing.huddle01.com/api/v1/join-room-token", {
    method: "POST",
    body: JSON.stringify({
      roomId: req.body.roomId,
      userType: "host",
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
