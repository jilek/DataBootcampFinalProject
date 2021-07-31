## Database:

This is the current outline of the ETL and database. 

![data_flow_diagram](https://github.com/jilek/DataBootcampFinalProject/blob/main/Yan/Segment2/screenshots/data_flow_diagram.png)


## AWS RDS: 

* The database contains 2 tables as shown in the schema in the image below. They are linked together through the 'Broad_Bean_Origin_Country' by a one to many relationship.

![Schema](https://github.com/jilek/DataBootcampFinalProject/blob/main/Yan/Segment2/screenshots/schema.png)

* Through pgAdmin, we have imported the cleaned csv files to populate the tables. When the tables are queried, we can view data directly in pgAdmin.

|   |      pgAdmin Tables:     |
|----------|:-------------:|
|clean_flavors_table |  ![clean_flavors](https://github.com/jilek/DataBootcampFinalProject/blob/main/Yan/Segment2/screenshots/clean_flavors_table_pdadmin.png) | 
| location_table |  ![loc_table](https://github.com/jilek/DataBootcampFinalProject/blob/main/Yan/Segment2/screenshots/location_table_pgadmin.png)  |  

## Connecting to AWS RDS:

* 

* Stores static data for use during the project	Yan: (RDS + PostgreSQL)	

* Interfaces with the project in some format (DB connects to model?)

* Includes at least two tables

* Includes at least at least one join

* Includes at least one connection string	Done? (SQLAlchemy see README_DATABASE.md)	

* Include ERD	Done (see Figure 1 below)	




