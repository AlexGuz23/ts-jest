import * as fs from 'fs';
import * as path from 'path';
import { JestConfig } from './jest-types';

const logs: any[] = [];
let loggingDisabled: boolean = true;
let logsFlushed: boolean = false;

export function enableLoggingIfNeeded(config: JestConfig) {
  if (
    config.globals &&
    config.globals['ts-jest'] &&
    config.globals['ts-jest'].debug
  ) {
    loggingDisabled = false;
    logOnce('Logging enabled');
  }
}

export function logOnce(...thingsToLog: any[]) {
  if (loggingDisabled) {
    return;
  }
  thingsToLog.forEach(msg => {
    if (includes(logs, msg)) {
      return; // Message has already been logged
    }
    logs.push(msg);
  });
}

export function flushLogs() {
  if (loggingDisabled || logsFlushed) {
    return; // only output stuff for the first invocation and if logging is enabled.
  }
  logsFlushed = true;
  const rootPath = path.resolve(__dirname, '../');
  const JSONifiedLogs = logs.map(convertToJSONIfPossible);
  const logString = JSONifiedLogs.join('\n');
  const filePath = path.resolve(rootPath, 'debug.txt');
  console.warn('Writing file to : ', filePath);
  fs.writeFileSync(filePath, logString);
}

function includes<T>(array: T[], subject: T) {
  return array.indexOf(subject) !== -1;
}

function convertToJSONIfPossible(object: any): string {
  try {
    return JSON.stringify(object, null, 2);
  } catch {
    return object; // if unable to parse, simply return.
  }
}
