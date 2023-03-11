exports.Sort = (array) => {
  for (var i = 0; i < (array.length); i++) {
    for (var j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        tmp = array[i]; array[i] = array[j]; array[j] = tmp;
      }
    }
  };
  return array;
}

exports.PrntList = (list) => {
  for (var i = 0; i < list.length; i++) {
    console.log(`${i+1} >> ${list[i]}`);
  }
  console.log();
}

exports.timesIndexed = (list, key) => {
  viewIndex = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i] === key) {
      viewIndex.push(i)
    }
  }
  return viewIndex;
}

exports.getRandomIntList = (list, size, min, max, rule) => {
  for (var i = 0; i < size; i++) {
    int = Math.floor(Math.random() * (max - min + 1)) + min;
    while (list.includes(int) && (rule == 'no_duplicates')) {
      int = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    list.push(int);
  }
  return list;
}

exports.ZeroOutList = (index) => {
  array = [];
  for (var i = 0; i < index; i++) {
    array.push(0)
  }
  return array;
}
