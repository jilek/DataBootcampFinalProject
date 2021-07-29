# DataBootcampFinalProject Segment2 Deliverable

**This is the Segment2 Deliverable for the Data Analytics Bootcamp Final Project.**

## Overview

- **Topic**: Our team will create a Neural Network to determine the 'rating' of chocolate from this kaggle dataset.
- **Reason**: Because we love chocolate. The scientific name is *Theobroma cacao* (Theobroma means "Food of the gods")
- **Data Sources**:

    - [Kaggle Chocolate Bar Ratings](https://www.kaggle.com/rtatman/chocolate-bar-ratings)
    - [Flavors of Cacao](http://flavorsofcacao.com/chocolate_database.html)
    - [Kaggle Countries and States Lat Lon](https://www.kaggle.com/paultimothymooney/latitude-and-longitude-for-every-country-and-state)


- **Questions we want to answer**:
    1. Can we predict which chocolate bars will be rated in the top 15% (i.e. Rating >= 3.75, one Standard Deviation above the Mean), based on:

        + Review date: How recent was the review?
        + Cocoa Percent: Ranges from 42% to 100%
        + Bean Type: Criollo, Trinitario, or Forastero
        + Broad Bean Origin: Country where the cocoa beans were grown

    2. Where are the best cocoa beans grown?
    3. Which countries product the hightest-rated bars?
    4. What's the relationship between cocoa solids percentage and rating?

 - References:
    + [Cacao Varieties - Willie's cacao](https://www.williescacao.com/world-cacao/different-cacao-varieties/)
    + [Cocoa Bean - Wikipedia](https://en.wikipedia.org/wiki/Cocoa_bean)

Table 1 - Team Roles for this Project

| Deliverable  | Role     | Member |
| :--          | :--      | :--    |
| Presentation | X?       | Travis |
| GitHub       | Square   | Bruce |
| ML Model     | Triangle | Tahereh / Bruce |
| Database     | Circle   | Yan |
| Dashboard    | X?       | Travis |

## Results

See Table A1 in the Appendix for the Segment1 Rubric

Table 2 - Rubric for Segment2

| Segment | Item | Details |Points |
| :--     | :--  | :--     |   --: |
| 2 | **[Presentation as PDF](https://github.com/jilek/DataBootcampFinalProject/blob/main/Segment2_Deliverable/Chocolate%20Bar%20Ratings%20Predictor.pdf)** | |  15 |
|   | **[Presentation as Google Slides](https://drive.google.com/drive/folders/1R4K90dXMlQ8stR5bSdv7_Ihnfq-KnghP)** | | |
|   | Selected topic                                                 | Done: (see Overview above) |     |
|   | Reason for topic                                               | Done: (see Overview above) |     |
|   | Desc. of data source                                           | Done: (see Overview above) |     |
|   | Questions we want to answer                                    | Done: (see Overview above) |     |
|   | Description of the data exploration phase of the project       | **TBD**                    |     |
|   | Description of the analysis phase of the project               | **TBD**                    |     |
|   | *Slides*                                                       |                            |     |
|   |  Presentations are drafted in Google Sheets                    | **Done? google sheets?**   |     |
| 2 | **GitHub**                                                     |                            |  10 |
|   | *Main branch*                                                  |                            |     |
|   | All code necessary to perform exploratory analysis             | **Done?** (EDA.ipynb)      |     |
|   | Some code necessary to complete the machine learning portion   | **Done?** (ChocolateBarRatings.ipynb)
|   | *README.md*                                                    |                            |     |
|   | Communication protocols                                        | **Done?** (Slack)          |     |
|   | Outline of the project                                         | **TBD**                    |     |
|   | *Individual Branches*                                          |                            |     |
|   | At least one branch for each team member                       | Done                       |     |
|   | Each member has >= 4 commits for Segment2 (>=8 total)          | [Done](https://github.com/jilek/DataBootcampFinalProject/pulse)  |     |
| 2 | **[ML model](https://github.com/jilek/DataBootcampFinalProject/blob/main/Segment2_Deliverable/ChocolateBarRatings.ipynb)** |  |  30 |
|   | Description of preliminary data preprocessing                  | **TBD**                    |     |
|   | Description of preliminary feature engineering and preliminary feature selection, including decision-making process                 | **TBD**                    |     |
|   | Description of how data was split into training and testing sets | **TBD** |  |
|   | Explanation of model choice, including limitations and benefits | **TBD**  |  |
| 2 | **Database**                                                   |                            |  30 |
|   | Stores static data for use during the project                  | **Done?** (RDS + PostgreSQL)|    |
|   | Interfaces with the project in some format (DB connects to model?) | **Done?**              |     |
|   | Includes at least two tables                                   | **TBD**                    |     |
|   | Includes at least at least one join                            | **TBD**                    |     |
|   | Includes at least one connection string                        | **Done?** (SQLAlchemy)     |     |
|   | Include ERD                                                    | Done (see Figure 1 below)  |     |
| 2 | **Dashboard**                                                  |                            |  15 |
|   | Storyboard on Google Slides                                    | **TBD**                    |     |
|   | Description of the tools that will be used to create the final dashboard | **TBD**          |     |
|   | Description of the interactive elements                        | **TBD**                    |     |
| 2 | **Total**                                                      |                            | 100 |

Figure 1 - Entity Relationship Diagram (ERD) for the provisional Database

![ERD](Images/erd_diagram.png)

###### Presentation: Description of the data exploration phase of the project

Write-up to match slides goes here

###### Presentation: Description of the analysis phase of the project

Write-up to match slides goes here

###### GitHub / README.md: Communication protocols

Write-up goes here

###### GitHub / README.md: Outline of the project

Write-up goes here

###### ML Model: Description of preliminary data preprocessing

Write-up goes here

###### ML Model: Description of preliminary feature engineering and preliminary feature selection, including decision-making process

Write-up goes here

###### ML Model: Description of how data was split into training and testing sets

Write-up goes here

###### ML Model: Explanation of model choice, including limitations and benefits

Write-up goes here

###### Database: Includes at least two tables

Write-up goes here

###### Database: Includes at least at least one join

Write-up goes here

###### Dashboard: Storyboard on Google Slides

Write-up goes here

###### Dashboard: Description of the tools that will be used to create the final dashboard

Write-up goes here

###### Dashboard: Description of the interactive elements

Write-up goes here

## Summary

**To be completed in future segments**

## Appendix 1

Table A1 - Rubric for Segment1

| Segment | Item | Details |Points |
| :--     | :--  | :--     |   --: |
| 1 | [Presentation](https://github.com/jilek/DataBootcampFinalProject/blob/main/Segment2_Deliverable/Chocolate%20Bar%20Ratings%20Predictor.pdf)                           |                            |  30 |
|   | Selected topic                                                 | Done: (see Overview above) |     |
|   | Reason for topic                                               | Done: (see Overview above) |     |
|   | Desc. of data source                                           | Done: (see Overview above) |     |
|   | Questions we want to answer                                    | Done: (see Overview above) |     |
| 1 | GitHub                                                         |                            |  10 |
|   | Main branch includes a README.md                               | Done: this file            |     |
|   | README.md includes communication protocols                     | Done: Slack                |     |
|   | At least one branch for each team member                       | Done                       |     |
|   | Each member has at least 4 commits.                            | Done                       |     |
| 1 | [ML model](https://github.com/jilek/DataBootcampFinalProject/blob/main/Segment2_Deliverable/ChocolateBarRatings.ipynb) |  |  35 |
|   | Takes in data from the provisional database                    | Done: CSV for now          |     |
|   | Outputs label(s) for input data                                | Done: we predict 'Rating'  |     |
| 1 | Database                                                       |                            |  25 |
|   | Sample data the mimics the expected final DB schema            | Done: ERD and SQL now      |     |
|   | Draft machine learning module is connected to the provional DB | Done: CSV for now          |     |
| 1 | Dashboard                                                      |                            |   0 |
|   | n/a for segment 1                                              |                            |     |
| 1 | **Total**                                                      |                            | 100 |
