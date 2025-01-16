// actions core
import core from "@actions/core";
import { purgePathCache } from "@tardis-ksh/tencent/cdn";

const inputs = {
  Paths: core.getInput("paths")?.split(/\s+/).filter(Boolean),
  FlushType: core.getInput("flush_type"),
  UrlEncode: core.getInput("url_encode") === "true",
  Area: core.getInput("area"),
};

const credentials = {
  secretId: core.getInput("secret_id"),
  secretKey: core.getInput("secret_key"),
};

// console.log(inputs, "tencent cdn purge cache user inputs");

purgePathCache(credentials, inputs);
