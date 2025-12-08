# Video Background Files

Place your video background files here:

## Required Files:
- `neon-hero-bg.mp4` - Main video file (MP4 format, H.264 codec)
- `neon-hero-bg.webm` - Optional WebM format for better browser support

## Recommended Specifications:
- **Resolution**: 1920x1080 (Full HD) or 1280x720 (HD)
- **Duration**: 10-30 seconds (will loop automatically)
- **File Size**: Under 5MB (compress for web)
- **Frame Rate**: 24-30 fps
- **Aspect Ratio**: 16:9

## Free Video Sources:
1. **Pexels**: https://www.pexels.com/search/videos/neon/
2. **Pixabay**: https://pixabay.com/videos/search/neon%20lights/
3. **Coverr**: https://coverr.co/

## Suggested Search Terms:
- "neon lights"
- "neon signs workshop"
- "LED manufacturing"
- "glowing neon"
- "abstract neon"
- "colorful lights bokeh"

## Video Compression Tips:
Use FFmpeg to optimize your video:

```bash
# Compress MP4
ffmpeg -i input.mp4 -vcodec h264 -crf 28 -preset slow neon-hero-bg.mp4

# Create WebM version
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 neon-hero-bg.webm
```

## Note:
Until you add your video files, the hero section will display a beautiful gradient background as a fallback.
