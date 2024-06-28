export const getCutText = (text: string) => {
  console.log(text.length);
  return text.length > 66 ? text.slice(0, 66) + "..." : text;
};
