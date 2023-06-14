export const useUtilities = () => {
  function toTitleCase(str) {
    const firstLetter = str[0].toUpperCase();
    const rest = str.slice(1);
    const title = `${firstLetter}${rest}`;
    return title;
  }

  return { toTitleCase };
};
