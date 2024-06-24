export const getAvatarName = (name: string): string => {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
};
