datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL_SUPABASE")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        Int      @id @unique @default(autoincrement())
  createdAt DateTime @default(now())
  email     String   @unique
  name      String
  role      Role     @default(RECEPTIONIST)
  orders    Order[]  @relation(references: [id])
  password  String   @default("123456") @db.VarChar(255)
}

model Order {
  id        Int      @id @unique @default(autoincrement())
  fullName  String   @db.VarChar(35)
  ci        Int      @unique
  birth     DateTime
  phone     Int
  nit       Int
  reason    String
  doctor    String
  createdAt DateTime @default(now())
  userId    User[]   @relation(references: [id])
}

enum Role {
  ADMIN
  BIOCHEMICAL
  RECEPTIONIST
}











datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL_SUPABASE")
}

generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["fullTextSearch"]
}

model Account {
  id                 String  @id @default(cuid())
  userId             String
  type               String
  provider           String
  providerAccountId  String
  refresh_token      String?
  access_token       String?
  expires_at         Int?
  token_type         String?
  scope              String?
  id_token           String?
  session_state      String?
  oauth_token_secret String?
  oauth_token        String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]
  userId        Int       @unique @default(autoincrement())
  createdAt     DateTime  @default(now())
  role          Role      @default(RECEPTIONIST)
  orders        Order[]   @relation(references: [id])
  password      String    @default("123456") @db.VarChar(255)
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
}

model Order {
  id        Int      @id @unique @default(autoincrement())
  fullName  String   @db.VarChar(35)
  ci        Int      @unique
  birth     DateTime
  phone     Int
  nit       Int
  reason    String
  doctor    String
  createdAt DateTime @default(now())
  userId    User[]   @relation(references: [id])
}

enum Role {
  ADMIN
  BIOCHEMICAL
  RECEPTIONIST
}

