// actions core
import core from "@actions/core";
import { purgePathCache, describePurgeTasksStatusByTaskId } from "@tardis-ksh/tencent/cdn";

const inputs = {
  Paths: core.getInput("paths")?.split(/\s+/).filter(Boolean),
  FlushType: core.getInput("flush_type"),
  UrlEncode: core.getInput("url_encode") === "true",
  Area: core.getInput("area"),
};

const options = {
  waitFlushDone: core.getInput("wait_flush_done") === "true",
}

const credentials = {
  secretId: core.getInput("secret_id"),
  secretKey: core.getInput("secret_key"),
};

// console.log(inputs, "tencent cdn purge cache user inputs");

const purgeResult = await purgePathCache(credentials, inputs);

if (options.waitFlushDone && purgeResult.TaskId) {
  // wait taskId in purgeResult
  await new Promise(resolve => setTimeout(resolve, 1500));
  const flushResult = await describePurgeTasksStatusByTaskId(credentials, {
    TaskId: purgeResult.TaskId,
  }, {
    FlushType: 'path',
    Area: inputs.Area || 'global',
  });
  
  console.log(flushResult);
}
