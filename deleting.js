let list = ['arroz', 'feijão', 'batata', 'cenoura'];

list = list.filter((item) => {
  return item !== 'feijão';
});

console.log(list);