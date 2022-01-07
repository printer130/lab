-- CreateTable
CREATE TABLE "post_in_categories" (
    "post_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "posts" (
    "post_id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "title" VARCHAR(256) NOT NULL,
    "content" TEXT,
    "author_id" INTEGER,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("post_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "post_id_category_id_unique" ON "post_in_categories"("post_id", "category_id");

-- AddForeignKey
ALTER TABLE "post_in_categories" ADD CONSTRAINT "post_in_categories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("category_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "post_in_categories" ADD CONSTRAINT "post_in_categories_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("post_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
