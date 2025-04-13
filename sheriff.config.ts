import { noDependencies, sameTag, SheriffConfig } from '@softarc/sheriff-core';

export const config: SheriffConfig = {
  entryFile: 'apps/nxtest/src/main.ts',
  modules: {
    'libs': {
      '<domain>/src': ['domain:<domain>', 'type:domain-root'],
      '<domain>/src/lib/feat-<name>': ['domain:<domain>', 'type:feature'],
      '<domain>/src/lib/<type>': ['domain:<domain>', 'type:<type>'],
    },
  },
  depRules: {
    'domain:*': [sameTag, 'domain:shared'],
    'type:feature': ['type:feature', 'type:ui', 'type:data', 'type:util'],
    'type:ui': ['type:ui', 'type:util'],
    'type:data': ['type:data', 'type:util'],
    'type:util': 'type:util',
    'type:domain-root': sameTag,
    'type:model':  noDependencies,
    root: ['type:feature', 'type:domain-root'], // (domain wildcard) so apps can import their shell feature,
    noTag: "noTag"
  },
  enableBarrelLess: true
};