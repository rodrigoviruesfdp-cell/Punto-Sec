Add-Type -TypeDefinition @"
using System;
using System.Drawing;
using System.Drawing.Imaging;

public class ImageUtils {
    public static Rectangle GetVisibleBoundingBox(Bitmap bmp) {
        int minX = bmp.Width, minY = bmp.Height, maxX = 0, maxY = 0;
        
        BitmapData data = bmp.LockBits(new Rectangle(0, 0, bmp.Width, bmp.Height), ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
        int bytes = Math.Abs(data.Stride) * bmp.Height;
        byte[] rgbValues = new byte[bytes];
        System.Runtime.InteropServices.Marshal.Copy(data.Scan0, rgbValues, 0, bytes);
        bmp.UnlockBits(data);

        for (int y = 0; y < bmp.Height; y++) {
            for (int x = 0; x < bmp.Width; x++) {
                byte a = rgbValues[y * data.Stride + x * 4 + 3];
                if (a > 10) {
                    if (x < minX) minX = x;
                    if (x > maxX) maxX = x;
                    if (y < minY) minY = y;
                    if (y > maxY) maxY = y;
                }
            }
        }
        
        if (minX > maxX || minY > maxY) return new Rectangle(0, 0, bmp.Width, bmp.Height);
        return new Rectangle(minX, minY, maxX - minX + 1, maxY - minY + 1);
    }
}
"@ -ReferencedAssemblies System.Drawing

$srcPath = ".\IMG\Logo simplificado puntosec (fondo transparente ).png"
$img = [System.Drawing.Bitmap]::FromFile($srcPath)

# Get bounding box to crop empty transparent space
$cropRect = [ImageUtils]::GetVisibleBoundingBox($img)
Write-Host "Cropping to: X=$($cropRect.X), Y=$($cropRect.Y), W=$($cropRect.Width), H=$($cropRect.Height)"

$sizes = @(16, 32, 180, 512)
$names = @("favicon-16x16.png", "favicon-32x32.png", "apple-touch-icon.png", "favicon-512x512.png")

for ($i = 0; $i -lt $sizes.Length; $i++) {
    $size = $sizes[$i]
    $outPath = ".\IMG\" + $names[$i]
    
    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    
    # Make background transparent
    $g.Clear([System.Drawing.Color]::Transparent)
    
    # Use 95% of space to make it look HUGE but without clipping
    $targetSize = [int]($size * 0.95)
    
    $w = $cropRect.Width
    $h = $cropRect.Height
    
    if ($w -gt $h) {
        $drawW = $targetSize
        $drawH = [int]($h * ($targetSize / $w))
    } else {
        $drawH = $targetSize
        $drawW = [int]($w * ($targetSize / $h))
    }
    
    $x = [int](($size - $drawW) / 2)
    $y = [int](($size - $drawH) / 2)
    
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    
    $destRect = New-Object System.Drawing.Rectangle($x, $y, $drawW, $drawH)
    $g.DrawImage($img, $destRect, $cropRect.X, $cropRect.Y, $cropRect.Width, $cropRect.Height, [System.Drawing.GraphicsUnit]::Pixel)
    
    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
}

$img.Dispose()
Write-Host "Huge Transparent Favicons generated successfully."
