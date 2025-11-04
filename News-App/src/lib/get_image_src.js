// Basic pattern to extract first img src
const getFirstImageSrc = (htmlString) => {
  const regex = /<img[^>]*src\s*=\s*["']([^"']+)["'][^>]*>/i;
  const match = htmlString.match(regex);
  return match ? match[1] : null;
};

export default getFirstImageSrc;
