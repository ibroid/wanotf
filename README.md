# Wanotif
Aplikasi whatssapp notifikasi untuk pihak berperkara di Lingkungan Peradilan Agama. Dibangun dengan node.js dan menggunakan library [WhiskeySockets](https://github.com/WhiskeySockets)/**[Baileys](https://github.com/WhiskeySockets/Baileys)** dengan tambahan [fastify](https://github.com/fastify)/**[fastify](https://github.com/fastify/fastify)** untuk UI admin dan rest API.

## Cara Instalasi

1. Clone repo
2. Install dependencies ``npm install``
3. Setup file env ``cp .env.example .env``
4. Tambahakan url database SIPP ``DATABASE_URL_SIPP="mysql://userdb:password@ip_server_sipp/nama_db_sipp"``
5. buat database wanotif ``CREATE DATABASE wanotif;`` lalu tambahkan url nya di file env``DATABASE_URL_LOCAL="mysql://localhost/db_wanotif"``
6. Generate prisma schema database sipp ``npm run gen:sipp``
7. Test koneksi database sipp ``npm run test:sipp``
8. Push Schema database admin ``npm run dbpush:local``
9. Generate prisma schema admin ``npm run gen:local``
10. Clone web template untuk halaman admin ``git clone https://github.com/BootstrapDash/Kapella-Free-Bootstrap-Admin-Template.git /web/static`` lalu remove git sub nya dengan ``cd web/static && rm -rf .git``
11. run development ``npm run dev:notasks``
 

## Production
Project ini belum ready untuk production.

