const handler = (_, res) => {
  const body = { message: "Hello" };
  res.statusCode = 200;
  res.json(body);
};
export default handler;
