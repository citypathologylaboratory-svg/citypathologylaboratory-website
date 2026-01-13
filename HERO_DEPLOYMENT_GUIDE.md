# Hero Section Deployment Guide

## Overview
The Hero section has been successfully updated with:
- **Video Background**: Full-screen auto-playing video background
- **Home Collection Service Promotion**: Prominent messaging highlighting home sample collection
- **Responsive Design**: Mobile-friendly with proper text sizing and layouts
- **Call-to-Action Buttons**: Direct booking link and service information link

## Changes Made

### 1. New Component Created
**File**: `app/components/Hero.tsx`

The Hero component includes:
- Full-screen video background with autoplay, muted, and loop
- Dark overlay for text readability
- Responsive heading: "Premium Pathology Testing at Your Doorstep"
- Home collection service highlight box with checkmark
- Two CTA buttons:
  - "Book Appointment Now" (links to Calendly)
  - "Learn About Our Services" (internal anchor link)
- Contact information footer

### 2. Updated Home Page
**File**: `app/page.tsx`

Changes:
- Added import: `import Hero from './components/Hero';`
- Added `<Hero />` component right after the main tag opens
- Added `id="why-choose"` to the "Why Choose City Pathology Laboratory?" section
- All other sections remain unchanged and untouched

## Video File Setup

### Important: Video File Required
The Hero component expects a video file at: `public/hero-video.mp4`

**Steps to upload the video:**

1. **Local Development:**
   - Place your video file in the `public/` folder with the name `hero-video.mp4`
   - The video should be in MP4 format for maximum browser compatibility
   - Recommended video specs:
     - Resolution: 1920x1080 or 1920x1440 (16:9 or 5:6 aspect ratio)
     - Duration: 10-30 seconds (for looping)
     - File size: < 20MB (for web optimization)
     - Codec: H.264 video, AAC audio

2. **GitHub Upload Method 1 (Web Interface):**
   - Navigate to your repository → public folder
   - Click "Add file" → "Upload files"
   - Drag and drop or select your `hero-video.mp4` file
   - Commit with message: "feat: Add hero video background"

3. **GitHub Upload Method 2 (Git CLI):**
   ```bash
   cd your-repo
   git add public/hero-video.mp4
   git commit -m "feat: Add hero video background"
   git push origin main
   ```

4. **Vercel Deployment:**
   - Your Vercel deployment will automatically pick up the video from the public folder
   - No additional configuration needed

## Video Optimization (Recommended)

For best performance, compress your video:

```bash
# Using FFmpeg (install if not present)
ffmpeg -i original-video.mp4 -vcodec h264 -b:v 2000k -acodec aac -b:a 128k hero-video.mp4
```

This creates a web-optimized MP4 file around 5-15MB depending on duration.

## Component Features

### Responsive Behavior
- Desktop: Large hero image (full viewport)
- Tablet: Scales proportionally with touch-friendly buttons
- Mobile: Optimized text sizing, stack buttons vertically

### Styling Details
- Primary button: Blue gradient (`from-blue-600 to-blue-700`)
- Secondary button: Green (`bg-green-600`)
- Home collection highlight: Semi-transparent white with border
- Text colors: White text on dark overlay for contrast

### Link Integration
- "Book Appointment Now" → Opens Calendly in new tab
- "Learn About Our Services" → Scrolls to #why-choose section
- Contact info displayed with phone number and hours

## Testing

### Before Deployment
1. **Local Testing:**
   ```bash
   npm run dev
   # Visit http://localhost:3000
   # Verify video plays, buttons work, layout is responsive
   ```

2. **Check on Different Devices:**
   - Desktop (Chrome, Firefox, Safari)
   - Tablet (iPad, Android tablets)
   - Mobile (iPhone, Android phones)

3. **Browser Compatibility:**
   - Video support: All modern browsers (Edge 79+, Firefox 25+, Chrome 6+, Safari 3.1+)
   - Video autoplay works in most cases (depends on browser autoplay policy)

### After Deployment
1. Visit `https://www.citypathlab.in`
2. Verify hero video displays and plays
3. Test both CTA buttons:
   - "Book Appointment Now" opens Calendly
   - "Learn About Our Services" scrolls to the Why Choose section
4. Test on mobile devices

## Troubleshooting

### Video Not Playing
- **Check file name**: Must be exactly `hero-video.mp4` in the public folder
- **Check file format**: MP4 with H.264 video codec
- **Check browser**: Some older browsers don't support video autoplay
- **Check console**: Look for 404 errors or CORS issues

### Video Not Looping
- The video should automatically loop (loop attribute is set)
- If not looping, check browser settings for autoplay policies

### Performance Issues
- Compress video using FFmpeg command above
- Reduce resolution if file size is > 20MB
- Consider using a CDN for video delivery in future

## Content Management

To change the video in the future:
1. Replace `public/hero-video.mp4` with new video
2. No code changes needed - the Hero component will use the new file

To modify Hero text:
1. Edit `app/components/Hero.tsx`
2. Update text in the component (lines 27, 31, 42, 45, etc.)
3. Commit changes and redeploy

## SEO Considerations

- Hero section has semantic HTML (`<section>`, `<h1>`, `<p>` tags)
- "Why Choose" section now has `id="why-choose"` for internal linking
- Page structure: Hero → Features (Why Choose) → Maintains existing hierarchy
- Video is not indexed for SEO (videos don't improve text-based SEO)

## Notes

- ✓ All other sections remain completely untouched
- ✓ No breaking changes to existing functionality
- ✓ Hero uses Next.js best practices
- ✓ Component is client-side rendered ('use client' directive)
- ✓ Responsive and accessible design
- ✓ No external dependencies added

## Next Steps

1. Upload `hero-video.mp4` to the `public` folder
2. Run `npm run build` to verify no build errors
3. Deploy to Vercel
4. Test on production

## Support

If you encounter any issues:
1. Check the video file exists at `public/hero-video.mp4`
2. Verify video codec is H.264 (run: `ffprobe hero-video.mp4`)
3. Check browser console for errors
4. Review this guide's troubleshooting section
