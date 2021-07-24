
-- Creates chocolate_table columns based on clean_flavours_of_cocoa.csv


CREATE TABLE chocolate_table (
	Company VARCHAR,
	Bean_Origin_or_Bar_Name VARCHAR,
	"REF"INT,
	Review_Date VARCHAR,
	Cocoa_Percent FLOAT,
	Company_Location VARCHAR,
	Rating FLOAT,
	Bean_Type VARCHAR,
	Broad_Bean_Origin VARCHAR,
	PRIMARY KEY ("REF")
);

-- Creates location_table columns based on the country_and_usa_states_lat_long

CREATE TABLE location_table (
	country_code VARCHAR,
	latitude FLOAT,
	longitude FLOAT,
	country VARCHAR,
	PRIMARY KEY (country)
);
