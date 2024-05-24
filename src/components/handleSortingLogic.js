import hashMap from "../static/hashmap";

export default function handleSortingLogic(str1, str2, sortingType) {
  let trimmedStr1;
  let trimmedStr2;
  for (let i = 0; i < str1?.length; i++) {
    if (hashMap.has(parseInt(str1.charAt(i), 10))) {
      trimmedStr1 = str1.substring(i);
      break;
    }
  }
  for (let i = 0; i < str2?.length; i++) {
    if (hashMap.has(parseInt(str2.charAt(i), 10))) {
      trimmedStr2 = str2.substring(i);
      break;
    }
  }
  console.log(parseFloat(trimmedStr1), parseFloat(trimmedStr2));
  if (!trimmedStr1) return 1;
  if (!trimmedStr2) return -1;
  if (sortingType === "fees") {
    return parseFloat(trimmedStr1) - parseFloat(trimmedStr2);
  } else if (sortingType === "reviews") {
    return parseFloat(trimmedStr2) - parseFloat(trimmedStr1);
  }
}
