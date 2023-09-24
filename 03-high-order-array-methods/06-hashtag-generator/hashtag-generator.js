function generateHashtag(str) {
  if (!str || str?.trim().length > 140) return false;
  return `#${str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")}`;
}

module.exports = generateHashtag;
