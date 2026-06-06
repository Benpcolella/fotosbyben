#!/bin/bash

# Create optimized folder structure
for dir in */; do
    mkdir -p "optimized/$dir"
done

# Compress all images
for dir in */; do
    echo "Compressing images in $dir..."
    for img in "$dir"*.{jpg,jpeg,png,JPG,JPEG,PNG}; do
        if [ -f "$img" ]; then
            filename=$(basename "$img")
            output="optimized/$img"
            # Compress with ImageMagick: reduce quality to 70, optimize
            convert "$img" -quality 70 -strip -interlace Plane "$output"
            original_size=$(du -h "$img" | cut -f1)
            compressed_size=$(du -h "$output" | cut -f1)
            echo "  ✓ $filename: $original_size → $compressed_size"
        fi
    done
done

echo "Compression complete!"
