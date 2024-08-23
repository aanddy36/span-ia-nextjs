-- CreateTable
CREATE TABLE "AvailableHours" (
    "id" TEXT NOT NULL,
    "dayInTheWeek" INTEGER NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "AvailableHours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReservedHours" (
    "id" TEXT NOT NULL,
    "hour" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReservedHours_pkey" PRIMARY KEY ("id")
);
