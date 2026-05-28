# Belajar Vibe Coding

Proyek backend REST API yang dibangun menggunakan runtime **Bun**, framework **ElysiaJS**, **Drizzle ORM**, dan database **MySQL**.

## Stack Teknologi
- **Runtime:** [Bun](https://bun.sh/)
- **Framework:** [ElysiaJS](https://elysiajs.com/)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Database:** MySQL

## Memulai Proyek

### 1. Instalasi Dependensi
Pastikan Anda sudah menginstal Bun di komputer Anda, lalu jalankan:
```bash
bun install
```

### 2. Konfigurasi Environment
Salin berkas `.env.example` menjadi `.env` dan sesuaikan kredensial database MySQL Anda:
```bash
cp .env.example .env
```

### 3. Migrasi Database
Untuk membuat tabel di database MySQL berdasarkan skema Drizzle:
```bash
bun run db:generate
bun run db:push
```

### 4. Menjalankan Server (Development)
Untuk menjalankan server lokal dengan fitur auto-reload (watch mode):
```bash
bun run dev
```
Server akan berjalan di `http://localhost:3000`.
