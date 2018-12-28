/**
 * @flow
 * 三种更新的策略: 配置到installMode: 之后即可生效
 * IMMEDIATE 立即更新APP
 * ON_NEXT_RESTART 到下一次启动应用时
 * ON_NEXT_RESUME 当应用从后台返回时
 * ON_NEXT_SUSPEND 当应用挂起
 */

import codePush from "react-native-code-push";
import { AppState, Platform } from "react-native";

function sync(mode: Number): void {
  let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };
  if (Platform.OS !== "ios") {
    return;
  }
  if (mode === 1) {
    codePush.sync(); //后台
  } else if (mode === 2) {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    });
  } else if (mode === 3) {
    codePush.sync({
      //deploymentKey: "deployment-key-here",
      updateDialog: {
        optionalIgnoreButtonLabel: "稍后",
        optionalInstallButtonLabel: "后台更新",
        optionalUpdateMessage: "有新版本了，是否更新？",
        title: "更新提示"
      },
      installMode: codePush.InstallMode.IMMEDIATE
    });
  } else if (mode === 4) {
    AppState.addEventListener("change", newState => {
      newState === "active" && codePush.sync();
    });
  }
}

export default sync;
