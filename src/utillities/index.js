export default function removeDuplicatesInArray(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}

