import { promises as fs } from "fs"
import path from "path"
import { fileURLToPath } from "url"
import imagemin from "imagemin"
import imageminWebp from "imagemin-webp"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const srcDir = path.join(__dirname, "../app/assets/img")
const destDir = path.join(__dirname, "../public/img")

async function getAllFiles(dir) {
  const files = []
  const entries = await fs.readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      const subFiles = await getAllFiles(fullPath)
      files.push(...subFiles)
    } else {
      files.push(fullPath)
    }
  }

  return files
}

async function generateWebp() {
  try {
    const srcExists = await fs
      .access(srcDir)
      .then(() => true)
      .catch(() => false)

    if (!srcExists) {
      console.error(`❌ Source directory not found: ${srcDir}`)
      console.error("   Create app/assets/img/ and place your images there.")
      return
    }

    console.log("🔄 Processing images...")

    await fs.rm(destDir, { recursive: true, force: true })
    await fs.mkdir(destDir, { recursive: true })

    const allFiles = await getAllFiles(srcDir)

    if (allFiles.length === 0) {
      console.log("⚠️  No files found in app/assets/img/")
      return
    }

    const imageFiles = allFiles.filter((file) => /\.(png|jpg|jpeg)$/i.test(file))

    for (const file of allFiles) {
      const relativePath = path.relative(srcDir, file)
      const destPath = path.join(destDir, relativePath)
      await fs.mkdir(path.dirname(destPath), { recursive: true })
      await fs.copyFile(file, destPath)
    }

    for (const file of imageFiles) {
      const relativePath = path.relative(srcDir, file)
      const destSubDir = path.dirname(path.join(destDir, relativePath))

      await imagemin([file], {
        destination: destSubDir,
        plugins: [imageminWebp({ quality: 85 })],
      })

      console.log(`✅ ${relativePath.replace(/\.(png|jpg|jpeg)$/i, ".webp")}`)
    }

    console.log(`\n✨ Done! Converted ${imageFiles.length} image(s) to WebP.`)
  } catch (error) {
    console.error("❌ Error:", error.message)
    process.exit(1)
  }
}

generateWebp()
