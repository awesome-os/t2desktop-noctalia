/**
 * @file src/index.mts
 * @description Awesome-OS T2Desktop Noctalia Edition manifest & session builder.
 * Pairs awesome-os/noctalia (Wayland shell) + awesome-os/explorer (Wayland file manager)
 * + awesome-os/t2linux + awesome-os/b8g-ghost @ cas-v1.
 */

export const T2DESKTOP_NOCTALIA_VERSION = '0.1.0';

export const T2DESKTOP_COMPONENTS = {
  baseOs: { repo: 'awesome-os/t2linux', role: 'base-os' },
  shell: { repo: 'awesome-os/noctalia', binary: 'noctalia', role: 'wayland-desktop-shell' },
  fileManager: { repo: 'awesome-os/explorer', binary: 'explorer', role: 'wayland-file-manager' },
  cas: {
    repo: 'awesome-os/b8g-ghost',
    indexUrl: 'https://raw.githubusercontent.com/awesome-os/b8g-ghost/main/manifests/index.json',
    role: 'content-addressed-store',
  },
} as const;

export interface T2DesktopNoctaliaPlan {
  readonly edition: 't2desktop-noctalia';
  readonly version: string;
  readonly theme: 'lumi-chromatic';
  readonly shellRepo: string;
  readonly explorerRepo: string;
  readonly casIndexUrl: string;
  readonly env: Record<string, string>;
}

export function buildNoctaliaSessionPlan(casDir = '~/.b8g/cas'): T2DesktopNoctaliaPlan {
  return {
    edition: 't2desktop-noctalia',
    version: T2DESKTOP_NOCTALIA_VERSION,
    theme: 'lumi-chromatic',
    shellRepo: T2DESKTOP_COMPONENTS.shell.repo,
    explorerRepo: T2DESKTOP_COMPONENTS.fileManager.repo,
    casIndexUrl: T2DESKTOP_COMPONENTS.cas.indexUrl,
    env: {
      XDG_CURRENT_DESKTOP: 'T2Desktop-Noctalia',
      XDG_SESSION_TYPE: 'wayland',
      B8G_GHOST_CACHE_DIR: casDir,
      AWESOME_OS_FILE_MANAGER: 'explorer',
      AWESOME_OS_DESKTOP_SHELL: 'noctalia',
    },
  };
}
