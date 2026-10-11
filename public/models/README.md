# 3D models (Sketchfab pipeline)

This folder hosts `.glb` product/scene models rendered by `ModelViewer`
(three.js + React Three Fiber + drei).

## Adding a Sketchfab model

1. Find a model on [sketchfab.com](https://sketchfab.com/) — filter by
   **Downloadable** and a permissive license (CC-BY/CC-0). Respect the
   author's license and keep attribution where required.
2. Download the **glTF (.glb)** archive, unzip, and copy the `.glb` into
   this folder (e.g. `public/models/rocket.glb`). Keep files under ~5 MB —
   decimate/compress large models before shipping.
3. The viewer resolves `/models/<file>.glb` automatically.

No models are vendored yet — binary assets are fetched by the site owner,
never hotlinked, so the build stays reproducible offline.
