module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) == false)
    return false;
  var result = [];
  members.forEach(element => {
    if (typeof element == 'string') {
      result.push(element.trim().toUpperCase().split('').shift())
    }
  });
  return result.sort().join('');
};