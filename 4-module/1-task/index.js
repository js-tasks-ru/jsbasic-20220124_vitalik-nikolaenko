function makeFriendsList(friends) {
  const ul = document.createElement('UL');
  const nameList = friends.map(item => `${item.firstName} ${item.lastName}`);
  for (const item of nameList) {
    ul.innerHTML += `<li>${item}</li>`
  }
  return ul
}
