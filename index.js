// actions core
const core = require("@actions/core");

const { purgePathCache } = require('@tardis-ksh/tencent/cdn');

const inputs = {
  secretId: core.getInput("secret_id"),
  secretKey: core.getInput("secret_key"),
  paths: core.getInput("paths")?.split(/\s+/).filter(Boolean),
  flushType: core.getInput("flush_type"),
  urlEncode: core.getInput("url_encode") === "true",
  area: core.getInput("area"),
};

console.log(inputs, "tencent cdn purge cache user inputs");

purgePathCache(inputs)
