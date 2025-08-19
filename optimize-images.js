import imagemin from 'imagemin';
import mozjpeg from 'imagemin-mozjpeg';
import pngquant from 'imagemin-pngquant';
import svgo from 'imagemin-svgo';

const files = await imagemin(['public/assets/images/**/*.{jpg,jpeg,png,svg}'], {
  destination: 'public/assets/images-optimized',
  plugins: [
    mozjpeg({ quality: 80 }),
    pngquant({ quality: [0.7, 0.9] }),
    svgo()
  ]
});

console.log('Images optimized:', files);