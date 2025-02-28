-- CreateTable
CREATE TABLE "Appeal" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'new',
    "topic" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "additional_text" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Appeal_pkey" PRIMARY KEY ("id")
);
