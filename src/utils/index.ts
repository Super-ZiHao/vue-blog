export const getTime = (time: string) => {
  const newDate = Date.now();
  const oldDate = new Date(time).getTime();
  const day = (newDate - oldDate) / 24 / 60 / 60 / 1000;
  if (day < 7) {
    return ~~day + `天前`;
  } else if (day < 30) {
    return ~~(day / 7) + '个星期前';
  } else if (day < 365) {
    return ~~(day / 30) + '个月前';
  } else {
    return ~~(day / 365) + '年前';
  }
};

export const handleString = (text: string) => {
  // 把 空格 替换 -
  let text1 = text.replaceAll(' ', '-');
  // 删除 ;
  text1 = text1.replaceAll(';', '');
  return text1 
};
