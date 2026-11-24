# Awesome-OS T2Desktop — Noctalia Edition (`awesome-os/t2desktop-noctalia`)

> **Sovereign zero-Qt / zero-GTK Wayland Desktop built on [`awesome-os/t2linux`](https://github.com/awesome-os/t2linux), [`awesome-os/noctalia`](https://github.com/awesome-os/noctalia) (C++23 Wayland + OpenGL ES Desktop Shell), [`awesome-os/explorer`](https://github.com/awesome-os/explorer) (C++23 Wayland + OpenGL ES File Manager), and [`awesome-os/b8g-ghost @ cas-v1`](https://github.com/awesome-os/b8g-ghost).**

## Stack

| Layer | Component |
| :--- | :--- |
| **Base OS** | [`awesome-os/t2linux`](https://github.com/awesome-os/t2linux) (bootable UEFI/BIOS ISO & QCOW2, `b8g-ghost` PID 1) |
| **Desktop Shell** | [`awesome-os/noctalia`](https://github.com/awesome-os/noctalia) (bars, dock, launcher, control center, notifications, lock screen, OSDs — C++23 + Wayland + OpenGL ES) |
| **File Manager** | [`awesome-os/explorer`](https://github.com/awesome-os/explorer) (tabs, split view, Miller columns, thumbnails, archives, SFTP/SMB/WebDAV, `xdg-desktop-portal` file picker) |
| **Applications & CAS** | [`awesome-os/b8g-ghost @ cas-v1`](https://github.com/awesome-os/b8g-ghost) (`sectium-browser`, `code-oss`, `theia`, `godot`, `blender`, `obs`, `.NET 11`, `Node 27`, `PowerShell 7.7`) |

Sibling edition: [`awesome-os/t2desktop-omarchy`](https://github.com/awesome-os/t2desktop-omarchy) (Omarchy MIT Hyprland edition).

## Verify Locally

```powershell
node --test test/t2desktop-noctalia.test.mts
```
