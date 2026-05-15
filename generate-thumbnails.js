import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectsDir = path.join(__dirname, 'client', 'public', 'projects');

const images = ['equipment.jpg', 'mclean.jpg', 'cybersecurity.jpg', 'logistics.jpg'];

async function generateThumbnails() {
  console.log('Gerando thumbnails...\n');

  for (const image of images) {
    const inputPath = path.join(projectsDir, image);
    const outputPath = path.join(projectsDir, `${path.parse(image).name}-thumb.jpg`);

    if (!fs.existsSync(inputPath)) {
      console.warn(`⚠️  Arquivo não encontrado: ${image}`);
      continue;
    }

    try {
      await sharp(inputPath)
        .resize(300, 200, {
          fit: 'cover',
          position: 'center',
        })
        .jpeg({ quality: 80 })
        .toFile(outputPath);

      console.log(`✓ Thumbnail gerado: ${path.parse(image).name}-thumb.jpg`);
    } catch (error) {
      console.error(`✗ Erro ao processar ${image}:`, error.message);
    }
  }

  console.log('\n✓ Concluído!');
}

generateThumbnails();
