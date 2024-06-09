const core = require('@actions/core');

try {
  const latestRelease = core.getInput('latest_release');

  console.log(`Latest release: ${latestRelease}`);

  // Get number after last "-" in latestRelease and parse it to int
  let oldNumber = parseInt(latestRelease.substring(latestRelease.lastIndexOf("-") + 1));
  if (isNaN(oldNumber)) {
    oldNumber = 0;
  }

  console.log(`Old number: ${oldNumber}`)

  // Increment oldNumber
  const newNumber = oldNumber + 1;

  console.log("Set new number: " + newNumber);

  core.setOutput("new_number", newNumber);
} catch (error) {
  core.setFailed(error.message);
}