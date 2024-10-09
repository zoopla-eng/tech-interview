import { type JestConfigWithTsJest, createDefaultEsmPreset } from "ts-jest";

const defaultPreset = createDefaultEsmPreset();

const jestConfig: JestConfigWithTsJest = {
  // [...]
  // Replace `ts-jest` with the preset you want to use
  // from the above list
  ...defaultPreset,
};

export default jestConfig;
