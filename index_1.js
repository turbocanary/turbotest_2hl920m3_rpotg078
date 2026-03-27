const crypto = require('crypto');

function anotherInsecurePassword() {
  // use cryptographically secure random suffix
  var randomBytes = crypto.randomBytes(4);
  var suffix = randomBytes.readUInt32BE(0) / 0x100000000;
  var password = "sssAAAA" + suffix;
  return password;
}