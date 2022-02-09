function getMinMax(str) {
  let strNum = str.split(' ').map(item => +item)
		.filter(item => !isNaN(item));
  return {min: strNum.reduce((a, b) => a < b ? a : b), max: strNum.reduce((a, b) => a > b ? a : b)}
}
