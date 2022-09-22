const core = require('@actions/core');

async function run() {
  try {
    core.warning('Search for missing package-lock.json files');
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
