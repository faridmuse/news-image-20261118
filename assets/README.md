# v2 assets — sources and licences

All four files were downloaded from Wikimedia Commons on 18 November 2026.
No image is hotlinked; each is stored locally and embedded by draw-v2.py.

## world-map.png — 7000x3386, PNG, 178,426 bytes
- **File:** "Blank World Map 2022.png" (blank world map, no labels)
- **Source:** https://commons.wikimedia.org/wiki/File:Blank_World_Map_2022.png
- **Author:** Traselu
- **Licence:** CC BY-SA 4.0
- **Use in v2:** recoloured (teal ocean → pale blue-grey to match the
  newsprint palette), cropped to lat 62N..9N, resized to the 988x132 band
  under the masthead. Numbered markers 1–10 drawn on it.
- **Note:** the map is equirectangular with latitude range 84N..90S
  (verified from the image itself: N Greenland at y=6–11, Sulawesi
  straddling the equator, W Australia ending ~34S). draw-v2.py uses
  lat_to_y = (84 − lat) / 174.2 × height.

## akvan.jpg — 1200x1511, JPEG, 324,766 bytes
- **File:** "Akvan 2026-11-16 0745Z.jpg" (Cyclone Akvan, satellite view)
- **Source:** https://commons.wikimedia.org/wiki/File:Akvan_2026-11-16_0745Z.jpg
- **Author:** VIIRS imagery from NOAA's NOAA-20 satellite
- **Licence:** Public domain (US federal government work, NASA/NOAA)
- **Use in v2:** photo box for topic 1 (Cyclone Akvan), centre-cropped to
  3:2 and resized to 150x100.
- **Fetch note:** upload.wikimedia.org rate-limited this VM (429);
  fetched via the images.weserv.nl proxy of upload.wikimedia.org.

## f15j.jpg — 1280x853, JPEG, 131,716 bytes
- **File:** "20181208 Mitsubishi F-15J takeoff Naha Air Show 2018-7.jpg"
  (JASDF F-15J Eagles taking off)
- **Source:** https://commons.wikimedia.org/wiki/File:20181208_Mitsubishi_F-15J_takeoff_Naha_Air_Show_2018-7.jpg
- **Licence:** CC0 (public domain dedication)
- **Use in v2:** photo box for topic 2 (Russian jets enter Japan's
  airspace), resized to 150x100 (already 3:2).
- **Fetch note:** fetched direct from thumb.wikimedia.org (1280px thumb);
  upload.wikimedia.org 429'd and the weserv proxy 404'd on this file.

## nvidia-hq.jpg — 1280x783, JPEG, 252,802 bytes
- **File:** "NVIDIA Headquarters.jpg" (Nvidia HQ, Santa Clara)
- **Source:** https://commons.wikimedia.org/wiki/File:NVIDIA_Headquarters.jpg
- **Licence:** CC BY-SA 4.0
- **Use in v2:** photo box for topic 3 (Nvidia beats forecasts),
  centre-cropped to 3:2 and resized to 150x100.
- **Fetch note:** fetched direct from thumb.wikimedia.org (1280px thumb);
  same 429/404 history as f15j.jpg.
