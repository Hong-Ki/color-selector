import colorJson from "./color-set.json";
import mappingJson from "./color-name-mapping.json";

export const getColor = key => {
  return colorJson[key];
};

export const getColorId = name => {
  return mappingJson[name];
};

export const getColorName = key => {
  return mappingJson[key];
};

export const getColorByName = name => {
  const key = mappingJson[name];
  return getColor(key);
};
