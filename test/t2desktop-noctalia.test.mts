import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';
import {
  T2DESKTOP_COMPONENTS,
  T2DESKTOP_NOCTALIA_VERSION,
  buildNoctaliaSessionPlan,
} from '../src/index.mts';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

describe('@awesome-os/t2desktop-noctalia', () => {
  it('builds a valid Wayland Noctalia + Explorer session plan', () => {
    const plan = buildNoctaliaSessionPlan('/var/cache/b8g/cas');
    assert.equal(plan.edition, 't2desktop-noctalia');
    assert.equal(plan.version, T2DESKTOP_NOCTALIA_VERSION);
    assert.equal(plan.shellRepo, 'awesome-os/noctalia');
    assert.equal(plan.explorerRepo, 'awesome-os/explorer');
    assert.equal(plan.env.XDG_SESSION_TYPE, 'wayland');
    assert.equal(plan.env.AWESOME_OS_FILE_MANAGER, 'explorer');
    assert.equal(plan.env.AWESOME_OS_DESKTOP_SHELL, 'noctalia');
  });

  it('resolves live awesome-os/b8g-ghost cas-v1 index', async () => {
    const res = await fetch(T2DESKTOP_COMPONENTS.cas.indexUrl, {
      headers: { 'User-Agent': 'awesome-os-t2desktop-noctalia/0.1.0' },
    });
    assert.equal(res.ok, true);
    const json = (await res.json()) as { total_entries: number };
    assert.ok(json.total_entries >= 100);
  });

  it('ships valid Lumi Chromatic Noctalia config and Wayland session entry', () => {
    const desktop = readFileSync(join(ROOT, 'config', 't2desktop-noctalia.desktop'), 'utf8');
    assert.ok(desktop.includes('Exec=t2desktop-noctalia-session'));
    assert.ok(desktop.includes('Type=Application'));
    const toml = readFileSync(join(ROOT, 'config', 'noctalia.toml'), 'utf8');
    assert.ok(toml.includes('explorer'));
  });
});
