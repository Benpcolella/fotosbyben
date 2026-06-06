# Create temporary backup
cp index.html index.html.bak

# Extract everything before imageData
sed -n '1,471p' index.html > temp.html

# Add the updated imageData
node update_imagedata.js >> temp.html

# Extract everything after imageData
tail -n +600 index.html >> temp.html 2>/dev/null || true

# Replace the file
mv temp.html index.html
echo "Updated imageData in index.html"
