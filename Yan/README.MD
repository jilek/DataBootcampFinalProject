## Database:

This is the current outline of the ETL process and database set up. 

![data_flow_diagram](https://github.com/jilek/DataBootcampFinalProject/blob/main/Yan/Segment2/screenshots/data_flow_diagram.png)


## AWS RDS and pgAdmin: 

* The database contains 2 tables as shown in the schema in the image below. They are linked together through the 'Broad_Bean_Origin_Country' by a one to many relationship.

![Schema](https://github.com/jilek/DataBootcampFinalProject/blob/main/Yan/Segment2/screenshots/schema.png)

* PgAdmin is connected directly to Amazon RDS. Through pgAdmin, we have imported the cleaned csv files to populate the tables. When the tables are queried, we can view the tables directly in pgAdmin.

|   |      pgAdmin Tables:     |
|----------|:-------------:|
|clean_flavors_table |  ![clean_flavors](https://github.com/jilek/DataBootcampFinalProject/blob/main/Yan/Segment2/screenshots/clean_flavors_table_pdadmin.png) | 
| location_table |  ![loc_table](https://github.com/jilek/DataBootcampFinalProject/blob/main/Yan/Segment2/screenshots/location_table_pgadmin.png)  |  

## Connecting to AWS RDS using Python:

* The libraries pyscopg2 and sqlAlchemy will be used to connect to AWS RDS from Jupyter notebooks.

![connect_to_rds](https://github.com/jilek/DataBootcampFinalProject/blob/main/Yan/Segment2/screenshots/connect_to_rds.png)

* Stores static data for use during the project	Yan: (RDS + PostgreSQL)	

* Interfaces with the project in some format (DB connects to model?)

* Includes at least two tables

* Includes at least at least one join

* Includes at least one connection string	Done? (SQLAlchemy see README_DATABASE.md)	

* Include ERD	Done (see Figure 1 below)	




