const convertISOString = str => {
  const date = new Date(str.replace("-", "/"))
  return date.toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export default convertISOString
