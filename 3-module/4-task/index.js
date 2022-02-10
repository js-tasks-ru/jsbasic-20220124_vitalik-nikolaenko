function showSalary(users, age) {
  return users.filter(item => item.age <= age)
            .sort((a, b) => a.balance - b.balance ? -1 : 1)
            .map(user => `${user.name}, ${user.balance}`).join('\n')
}
