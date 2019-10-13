import colorJson from "./color-set.json";
import nameJson from "./color-name-mapping.json";

export const getColor = key => {
  return colorJson[key];
};

export const getColorByName = name => {
  const key = nameJson[name];
  return getColor(key);
};
