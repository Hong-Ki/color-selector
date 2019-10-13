import colorJson from "./color-set.json";
import mappingJson from "./color-name-mapping.json";

export const getColor = key => {
  return colorJson[key];
};

export const getColorId = name => {
  return mappingJson.idToName[name];
};

export const getColorName = key => {
  return mappingJson.nameToId[key];
};

export const getColorByName = name => {
  return getColor(getColorId(name));
};
