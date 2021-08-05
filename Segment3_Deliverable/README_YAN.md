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

* The libraries pyscopg2 and sqlAlchemy will be used to connect to AWS RDS from Jupyter notebooks. Call the connect_to_db function to connect to AWS RDS and enter password.

![connect_to_rds](https://github.com/jilek/DataBootcampFinalProject/blob/main/Yan/Segment2/screenshots/connect_to_rds.png)

#
* Confirm that connection has been successful when the message 'connection successful' is printed.

![connect_success](https://github.com/jilek/DataBootcampFinalProject/blob/main/Yan/Segment2/screenshots/connection_confirmed.png)

#

## Query the RDS in Python (Jupyter Notebooks) and convert to pandas DataFrame to view.

* After connection has been made with the AWS RDS, we can query RDS within """ """ and store the tables in pandas dataframe.

|  |      SQL Query     |  Output |
|----------|:-------------:|:------:|
| Query to view location_table from RDS |![query_loc](https://github.com/jilek/DataBootcampFinalProject/blob/main/Yan/Segment2/screenshots/query_loc_table.png) |![output_loc](https://github.com/jilek/DataBootcampFinalProject/blob/main/Yan/Segment2/screenshots/rds_loc_table.png) |
| Query to view clean_flavors_table from RDS |![query_clean](https://github.com/jilek/DataBootcampFinalProject/blob/main/Yan/Segment2/screenshots/query_clean_flavors.png) |  ![clean_output](https://github.com/jilek/DataBootcampFinalProject/blob/main/Yan/Segment2/screenshots/rds_clean_flavors.png) |

## Join the two tables from RDS:

* As the data is divided into two tables, we can combine the two tables with a 'JOIN' using SQL syntax embedded within 3 quotemarks as shown in below image.
* The two tables will be joined together on the 'broad_bean_origin_country' column.

![sql_join_tables_code](https://github.com/jilek/DataBootcampFinalProject/blob/main/Segment2_Deliverable/Images/Query2tablesForMerge.png)

* Output of the combined table (see image below):
    * The columns highlighted within the blue section consists of data from the 'clean_flavors_table' while the columns highlighted within the green section are from the 'location_table'. The highlighted orange section is where the columns were merged on.

* The joined table is now ready to be used for plotting and preprocessing in the machine learning models.

![joined_tables](https://github.com/jilek/DataBootcampFinalProject/blob/main/Segment2_Deliverable/Images/joined_tables.png)






