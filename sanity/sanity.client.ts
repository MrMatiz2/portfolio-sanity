import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "ldzc44gv",
  dataset: "production",
  apiVersion: "2023-08-07",
  useCdn: false,
};

const client = createClient(config);

export default client;