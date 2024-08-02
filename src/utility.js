export const getImageUrl = (path) => {
  const baseUrl = '/src/assets/' + path;
  return new URL(baseUrl, import.meta.url).href;
};

/*
import.meta property exposes context-specific metadata to a JavaScript 
module. It contains information about the module, such as the module's URL.

import.meta is a special expression syntax. Only available in JavaScript modules.

The href property of the URL interface is a string containing the whole URL.
*/
