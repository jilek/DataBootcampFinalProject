-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/HYerZX
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "chocolate_table" (
    "REF" int   NOT NULL,
    "Company" string   NOT NULL,
    "Bean_Origin_or_Bar_Name" string   NOT NULL,
    "Review_Date" string   NOT NULL,
    "Cocoa_Percent" float   NOT NULL,
    "Company_Location" string   NOT NULL,
    "Rating" float   NOT NULL,
    "Bean_Types" string   NOT NULL,
    "Broad_Bean_Origin" string   NOT NULL,
    CONSTRAINT "pk_chocolate_table" PRIMARY KEY (
        "REF"
     )
);

CREATE TABLE "location_table" (
    "Broad_Bean_Origin" string   NOT NULL,
    "Lat" int   NOT NULL,
    "Long" int   NOT NULL,
    CONSTRAINT "pk_location_table" PRIMARY KEY (
        "Broad_Bean_Origin"
     )
);

ALTER TABLE "chocolate_table" ADD CONSTRAINT "fk_chocolate_table_Broad_Bean_Origin" FOREIGN KEY("Broad_Bean_Origin")
REFERENCES "location_table" ("Broad_Bean_Origin");

