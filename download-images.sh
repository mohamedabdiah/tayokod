#!/bin/bash

# Create the gallery directory if it doesn't exist
mkdir -p public/images/gallery

# Download images
curl -o public/images/gallery/web-dev.jpg "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80"
curl -o public/images/gallery/mobile-dev.jpg "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
curl -o public/images/gallery/ecommerce.jpg "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
curl -o public/images/gallery/enterprise.jpg "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&q=80"
curl -o public/images/gallery/cloud.jpg "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
curl -o public/images/gallery/design.jpg "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"

echo "Images downloaded successfully!" 