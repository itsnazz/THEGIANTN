# MINI GIANT · V1.0

Made by NAZ. Survive the night. Unlock sections. Upgrade your Load-out.

## Open the game

Open `the-giant-afterlight.html` in a current WebGL-capable browser. The game code, UI, geometry, textures and synthesized audio are contained in this HTML; its pinned Three.js 0.180.0 modules load from jsDelivr on first use. No external gun or zombie models are needed.

For a website, put all nine package files in the same directory on your HTTPS host. Keep the HTML filename and website address stable so existing browser saves remain accessible. App installation is under **How to play**. Use the top-right fullscreen button where supported; deployment does not force fullscreen or orientation changes. Phones work in portrait and landscape; landscape offers more room for controls.

## V1.0 changes

### Reference-inspired Pack-a-Punch cabinet

Rebuilt the machine as a wide turquoise enamel cabinet with a beveled chrome frame, open feed cavity, three lathed roller drums, splayed metal feet, a curved diamond-letter marquee, an oval weapon badge and a moving Please Wait flag. The feed tray retracts as the rollers process the weapon, then returns it with tier-colored electrical effects. All three existing upgrade tiers, prices, pause/reset behavior and weapon stats are preserved. Geometry and high-resolution sign textures are generated inside the HTML; no external model files are required. Static cabinet details are batched and roller motion respects the motion setting.

### Skin mapping and progression-page update

Profile now contains your name, career records and backup tools. Levels & wraps is a separate main-menu page with current XP, the next level, the next skin reward, actual-pattern swatches, a rotatable 3D preview for every weapon, reward filters and a level browser covering 1–550. Locked finishes can be previewed but cannot be equipped. Unlocked finishes are saved per weapon. The same shared renderer serves gameplay and the preview, avoiding another mobile WebGL context.

Skin coordinates now use a consistent physical scale across beveled parts, boxes and cylinders. Patterns stay fixed during reloads; Factory finish restores the original mapping and materials. Painted wraps use lower metalness so their colors remain visible, while Pack-a-Punch keeps its glow. Skin cards display the real procedural pattern rather than an approximate gradient.

- Opaque, softly blurred title backdrop: the game world is not visible behind the menu. Rendering pauses in ordinary menus to save graphics work.
- Rounded menu, settings, profile and weapon-inspection panels; navigation icons and a saved accent-color picker under Settings → Display → Your menu.
- 550 levels and 26 procedural weapon finishes, including Candy riot, Arcade ghost, Ghost circuit, Pop apocalypse, Furnace heart and Immortal GIANT.
- Profile JSON export/import, with file validation, restore preview and interrupted-match recovery. No server, password or subscription is required.
- Animated level and skin notices appear when earned XP is banked at the end of a match. Reduced UI motion disables entrance animation.
- Enemy-animation toggle, render distance (45–180 m), maximum render pixel budget (0.5–4 MP), plus the existing shadows, lights, snow, effects, resolution, frame cap and adaptive quality settings.
- Phones default to Low / 30 FPS on first use, use a 1K sky source, reduced geometry and music-buffer size, and avoid multisample antialiasing.
- Detailed perk cabinets, a curved bottle label, fluted cap, visible liquid and rising bubbles; refined dagger blade, guard and pommel details.
- A longer synthesized death sting briefly ducks the soundtrack. Existing combat balance, enemy tracking, doors, wall buys, grenades and Pack-a-Punch remain functional.

## Progression and backups

XP awards: elimination 10, headshot bonus 5, repaired board 3, power activation 100, cleared wave 40 + 5 × round. These values affect profile XP, not spendable match points. Required total XP for a level is 1200 × n + 60 × n × (n − 1), where n = level − 1. Level 550 requires 18,709,920 XP.

Existing XP is retained. Because progression is harder, the displayed level may be lower; previously earned skins remain unlocked. New skins unlock at levels 5, 15, 30, 45, 65, 80, 100, 120, 145, 170, 195, 220, 245, 270, 295, 320, 345, 370, 395, 420, 445, 470, 500, 525 and 550.

**Profile → Export profile** saves a portable JSON backup. On another browser/device, open **Profile → Import profile**, select that file, review the displayed name/level/records, then choose Restore profile.

## Controls

WASD move · Mouse look/fire · RMB aim · Shift sprint · C crouch / slide while sprinting · Space jump · E interact/hold repair · F knife · R reload · G grenade · Wheel/Q/1/2 switch weapons · Escape pause · O settings.

## Developer menu and usage statistics

Type **NAZ** to open the developer menu. God mode, infinite points/ammo, wave and weapon tests, skin unlock override and profile levels 1–550 are available. Developer runs are practice and do not award ranked career progress.

The offline worker uses cache `afterlight-pap-v11`. Installation and cached offline play need HTTPS (localhost also works). First loading still needs access to the pinned Three.js modules. Close older game tabs and reload after updating the website so its new service worker can activate.
