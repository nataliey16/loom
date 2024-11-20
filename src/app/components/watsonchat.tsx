import React from "react";
import {
  WebChatContainer,
  setEnableDebug,
} from "@ibm-watson/assistant-web-chat-react";

const webChatOptions = {
  integrationID: "2f4cfef4-3ff6-4521-bd2a-54065219e0f7",
  region: "us-east" as const,
  serviceInstanceID: "20240605-0942-3221-70db-d80964322815",
  onLoad: async (instance: any) => {
    await instance.render();
  },
  // subscriptionID: 'only on enterprise plans',
  // Note that there is no onLoad property here. The WebChatContainer component will override it.
  // Use the onBeforeRender or onAfterRender prop instead.
};

// Include this if you want to get debugging information from this library. Note this is different than
// the web chat "debug: true" configuration option which enables debugging within web chat.
setEnableDebug(true);

function App() {
  return <WebChatContainer config={webChatOptions} />;
}
