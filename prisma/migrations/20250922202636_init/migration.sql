-- CreateTable
CREATE TABLE "public"."User" (
    "userID" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "emailID" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "gender" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "postalCode" INTEGER NOT NULL,
    "userHeadline" TEXT NOT NULL,
    "userSummary" TEXT NOT NULL,
    "skills" TEXT NOT NULL,
    "experience" INTEGER NOT NULL,
    "passwordHash" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "public"."UserDetails" (
    "userDetailsID" SERIAL NOT NULL,
    "userID" INTEGER NOT NULL,

    CONSTRAINT "UserDetails_pkey" PRIMARY KEY ("userDetailsID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userID_key" ON "public"."User"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "User_emailID_key" ON "public"."User"("emailID");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "public"."User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "UserDetails_userDetailsID_key" ON "public"."UserDetails"("userDetailsID");

-- AddForeignKey
ALTER TABLE "public"."UserDetails" ADD CONSTRAINT "UserDetails_userID_fkey" FOREIGN KEY ("userID") REFERENCES "public"."User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;
