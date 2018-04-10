import { createUniversalConfig } from '@mediahuis/pulse-rollup-config';

const configs = createUniversalConfig({
  moduleName: 'MEDIAHUIS.user',
  plugins: {
    autoExternal: false,
  },
});

export default configs;
