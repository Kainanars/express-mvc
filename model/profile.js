const profileData = require('../profile.json');

function getProfile() {
  return profileData;
}

module.exports = {
  getProfile: getProfile,
};
