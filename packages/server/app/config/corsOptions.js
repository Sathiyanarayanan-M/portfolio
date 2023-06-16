module.exports = () => {
  const isDevMode = process.env.MODE === "development";
  if (isDevMode) {
    return {
      origin: "*",
    };
  }
  return {
    origin: "https://sathiyanarayanan-m.web.app",
  };
};
