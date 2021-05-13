import type { Config } from '@jest/types';
// @ts-ignore
import * as getDefault from '@snowpack/app-scripts-react/jest.config.js';

// Sync object
const config: Config.InitialOptions = {
  ...getDefault(),
};
export default config;
