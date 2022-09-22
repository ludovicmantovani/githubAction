const core = require('@actions/core');
const glob = require('@actions/glob');

async function run() {
  try {
    core.info(glob)
    core.info('Search for missing package-lock.json files');
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
