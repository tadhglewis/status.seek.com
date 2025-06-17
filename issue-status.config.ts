import { defineConfig } from "issue-status";
import { github } from "issue-status/providers";

export default defineConfig({
  name: "SEEK status page",
  description: "Status page for the SEEK API",
  provider: github({
    owner: "tadhglewis",
    repo: "status.seek.com",
  }),
});
