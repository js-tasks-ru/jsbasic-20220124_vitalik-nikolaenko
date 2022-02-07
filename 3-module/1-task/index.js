function namify(users) {
  let arrNames = [];
  for (i = 0; i < users.length; i++) {
    arrNames.push(users[i].name);
  }
  return arrNames
}
