import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { NavbarConfig } from '@/blocks/Navbar/config'
import { FooterConfig } from '@/blocks/Footer/config'
import { Users } from './collections/Users'
import { Submissions } from './collections/Submissions'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const dbAdapter = process.env.NODE_ENV === 'production'
  ? postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  })
  : sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./lullaby-animazioni.db',
    },
  })

export default buildConfig({
  routes: {
    admin: '/admin',
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals: [NavbarConfig, FooterConfig],
  collections: [Users, Media, Pages, Submissions],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: dbAdapter,
  sharp,
  plugins: [],
})