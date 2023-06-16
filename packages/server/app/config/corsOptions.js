module.exports = () => {
  const isDevMode = process.env.MODE === "development";
  console.log(isDevMode);
  if (isDevMode) {
    return {
      origin: "*",
    };
  }
  return {
    origin: "https://sathiyanarayanan-m.web.app",
  };
};
