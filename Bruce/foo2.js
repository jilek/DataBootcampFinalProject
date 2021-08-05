#!/usr/bin/env -S winpty node

console.log(`start`);

// npm install @aws-sdk/client-rds-data;

//import { RDSDataClient, BatchExecuteStatementCommand } from "@aws-sdk/client-rds-data";
const { RDSDataClient, BatchExecuteStatementCommand } = require("@aws-sdk/client-rds-data");

const client = new RDSDataClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new BatchExecuteStatementCommand(params);

console.log(`end`);
