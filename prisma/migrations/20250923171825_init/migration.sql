/*
  Warnings:

  - A unique constraint covering the columns `[userID]` on the table `UserDetails` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."UserDetails_userDetailsID_key";

-- AlterTable
ALTER TABLE "public"."UserDetails" ADD COLUMN     "collegeName" TEXT,
ADD COLUMN     "currentOrRecentIsCurrent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "currentOrRecentdescription" TEXT,
ADD COLUMN     "currentOrRecentendDate" TIMESTAMP(3),
ADD COLUMN     "currentOrRecentjobCompany" TEXT,
ADD COLUMN     "currentOrRecentjobRole" TEXT,
ADD COLUMN     "currentOrRecentstartDate" TIMESTAMP(3),
ADD COLUMN     "degree" TEXT,
ADD COLUMN     "endYear" INTEGER,
ADD COLUMN     "fieldOfStudy" TEXT,
ADD COLUMN     "github" TEXT,
ADD COLUMN     "gradeOrPercentage" TEXT,
ADD COLUMN     "linkedIn" TEXT,
ADD COLUMN     "projectDescription" TEXT,
ADD COLUMN     "projectTitle" TEXT,
ADD COLUMN     "projectURL" TEXT,
ADD COLUMN     "resume" TEXT,
ADD COLUMN     "technologiesUsed" TEXT,
ADD COLUMN     "website" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "UserDetails_userID_key" ON "public"."UserDetails"("userID");
