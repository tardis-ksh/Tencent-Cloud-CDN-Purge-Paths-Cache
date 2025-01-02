// Depends on tencentcloud-sdk-nodejs version 4.0.3 or higher
const tencentCloud = require("tencentcloud-sdk-nodejs-cdn");

// actions core
const core = require("@actions/core");

const CdnClient = tencentCloud.cdn.v20180606.Client;

const inputs = {
  secretId: core.getInput("secret_id"),
  secretKey: core.getInput("secret_key"),
  Paths: core.getInput("paths")?.split(/\s+/).filter(Boolean),
  FlushType: core.getInput("flush_type"),
  UrlEncode: core.getInput("url_encode"),
  Area: core.getInput("area"),
};

console.log(inputs, 'tencent cdn purge cache user inputs');

const clientConfig = {
  credential: {
    secretId: inputs.secretId,
    secretKey: inputs.secretKey,
  },
  profile: {
    httpProfile: {
      endpoint: "cdn.tencentcloudapi.com",
    },
  },
};

const client = new CdnClient(clientConfig);
const params = {
  Paths: inputs.Paths,
  FlushType: inputs.FlushType,
  UrlEncode: inputs.UrlEncode,
  Area: inputs.Area,
};

client.PurgePathCache(params).then(
  (data) => {
    console.log("purge cache success", data);
  },
  (err) => {
    console.error("purge cache error", err);
    process.exit(1);
  },
);
