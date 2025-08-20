import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const config = {
  quality: 80,
  maxWidth: 1920,
  maxHeight: 1080,
  formats: ['webp', 'jpg'],
  jpegQuality: 80,
  webpQuality: 80,
};

// Directories to process
const directories = [
  'public/assets/images/products',
  'src/assets/images/hero_images',
  'src/assets/images/about_images',
  'src/assets/images/collage_images',
  'src/assets/images/brand_story_images',
];

// Supported image extensions
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

async function optimizeImage(inputPath, outputPath, format = 'webp') {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Calculate new dimensions while maintaining aspect ratio
    let { width, height } = metadata;
    if (width > config.maxWidth || height > config.maxHeight) {
      const ratio = Math.min(config.maxWidth / width, config.maxHeight / height);
      width = Math.round(width * ratio);
      height = Math.round(height * ratio);
    }

    // Apply optimization based on format
    if (format === 'webp') {
      await image
        .resize(width, height, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: config.webpQuality })
        .toFile(outputPath);
    } else if (format === 'jpg' || format === 'jpeg') {
      await image
        .resize(width, height, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: config.jpegQuality })
        .toFile(outputPath);
    }

    // Get file sizes
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);

    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${savings}% smaller)`);
    
    return {
      original: originalSize,
      optimized: optimizedSize,
      savings: parseFloat(savings)
    };
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

async function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`⚠️  Directory not found: ${dirPath}`);
    return;
  }

  console.log(`\n📁 Processing: ${dirPath}`);
  
  const files = fs.readdirSync(dirPath);
  const imageFiles = files.filter(file => 
    imageExtensions.some(ext => file.toLowerCase().endsWith(ext))
  );

  if (imageFiles.length === 0) {
    console.log(`   No images found in ${dirPath}`);
    return;
  }

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let processedCount = 0;

  for (const file of imageFiles) {
    const inputPath = path.join(dirPath, file);
    const fileExt = path.extname(file).toLowerCase();
    
    // Skip if already optimized
    if (file.includes('_optimized')) {
      console.log(`   ⏭️  Skipping already optimized: ${file}`);
      continue;
    }

    // Create optimized filename
    const nameWithoutExt = path.basename(file, fileExt);
    const optimizedName = `${nameWithoutExt}_optimized.webp`;
    const outputPath = path.join(dirPath, optimizedName);

    const result = await optimizeImage(inputPath, outputPath, 'webp');
    
    if (result) {
      totalOriginalSize += result.original;
      totalOptimizedSize += result.optimized;
      processedCount++;
    }
  }

  if (processedCount > 0) {
    const totalSavings = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
    console.log(`\n📊 Summary for ${dirPath}:`);
    console.log(`   Processed: ${processedCount} images`);
    console.log(`   Original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Optimized size: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Total savings: ${totalSavings}%`);
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  let grandTotalOriginal = 0;
  let grandTotalOptimized = 0;
  let grandTotalProcessed = 0;

  for (const dir of directories) {
    const fullPath = path.join(__dirname, dir);
    const result = await processDirectory(fullPath);
  }

  console.log('\n🎉 Image optimization completed!');
  console.log('\n💡 Next steps:');
  console.log('   1. Review the optimized images');
  console.log('   2. Update your code to use the _optimized.webp files');
  console.log('   3. Remove original large files if satisfied');
  console.log('   4. Test that your site still looks good');
}

main().catch(console.error);