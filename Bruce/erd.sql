-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/HYerZX
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "foo" (
	"ID" SERIAL NOT NULL,
    "Company" VARCHAR NOT NULL,
    "Bean_Origin_or_Bar_Name" VARCHAR NOT NULL,
    "REF" INTEGER NOT NULL,
    "Review_Date" VARCHAR NOT NULL,
    "Cocoa_Percent" FLOAT NOT NULL,
    "Company_Location" VARCHAR NOT NULL,
    "Rating" FLOAT NOT NULL,
    "Bean_Types" VARCHAR NOT NULL,
    "Broad_Bean_Origin" VARCHAR NOT NULL
);
DROP TABLE chocolate_table CASCADE;



-- CREATE TABLE "location_table" (
--     "Broad_Bean_Origin" string   NOT NULL,
--     "Lat" int   NOT NULL,
--     "Long" int   NOT NULL,
--     CONSTRAINT "pk_location_table" PRIMARY KEY (
--         "Broad_Bean_Origin"
--      )
-- );

-- ALTER TABLE "chocolate_table" ADD CONSTRAINT "fk_chocolate_table_Broad_Bean_Origin" FOREIGN KEY("Broad_Bean_Origin")
-- REFERENCES "location_table" ("Broad_Bean_Origin");

