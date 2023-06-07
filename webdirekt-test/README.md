Develop a Customer module as per the details mentioned below:

Requirements:
1.	Design a Page for Customers using the Master Page and having the following:
-	A Form View which will be at the top with functionality for insert/update/view and delete.
-	User should be asked for confirmation before deleting a Customer.
-	A table which will be at the bottom showing a list of all Customers and a Select button.
-	When a record in the table is selected, the Form View should refresh and show the details for the selected record of the table.
-	Use Ajax so that the Page is not refreshed when you are refreshing the FormView to display the details of the selected Customer from the table.
-	Table should support pagination.
-	Sorting should be available on Name and Address1 columns of the table.
-	Set the grid row background = “green” when the Country of the Customer is “INDIA”.
2.	The fields to be displayed in the Form View are:
-	Customer Code(auto generated)
-	Industry (Drop down list populated from LIndustry table) 
-	Name (Required Field)
-	Address1 (Free Entry)
-	Address2 (Free Entry)
-	Street (Free Entry)
-	Country (Drop down list populated from LCountry table) 
-	Zip (Only numeric entries)
-	City (Free Entry)
-	Phone (Free Entry)
-	Fax (Free Entry)
-	Website (Free Entry)
-	Email (Only valid emails)
-	Notes (Free Entry with multi line facility for entering comments)
Data Details:

1.	Customer
Primary Key: autCustomerID
Purpose: Store the Customer details.
Remarks:
No	Name	Type	Length	Purpose
1	autCustomerID	int		Primary Key. Auto Identity field. System will generate ID when any new record is created
2	IndustryID	int		Will store the Industry of the Customer which will be autIndustryID of the table LIndustry
3	vchShortText	varchar	15	Short Name for Customer. 
Required field
4	vchCustomerName	varchar	50	Name of the Customer.
Require field
5	vchAddress1	Varchar	50	Field for entering address1 details
6	vchAddress2	varchar	50	Field for entering address2 details
7	vchStreet	varchar	50	Will store the Street of the Customer
8	CountryID	int	3	Will store the Country of the Customer which will be autCountryID from the table LCountry
9	vchZip	varchar	15	Will store the zip code for the Customer
10	vchCity	varchar	50	Will store the City of the Customer
11	vchPhone	varchar	20	Will store the Phone number of the Customer
12	vchFax	varchar	20	Will store the Fax number of the Customer
wdi india15:10
13	vchWebsite	varchar	50	Will store the Website of the Customer
14	vchEmail	varchar	50	Will store the email id of the Customer
15	vchComments	nvarchar	4000	Field for storing VchComments
16	bitDelflag	bit	1	Field for logical deletion of record
0 – record is not deleted
1 – record is deleted
2.	LIndustry:
Primary Key : autIndustryID
Purpose: Store the list of different Industries for a Customer		
Remarks:
No	Name	Type	Length	Purpose
1	autIndustryID	int	3	Primary Key. System generates a unique id when any new record is created.
2	vchShortText	varchar	5	Short description for the record e.g. “INS”
3	vchLongText	varchar	25	Long description for the record e.g. “INSURANCE”
4	bitDelflag	bit	1	Field for logical deletion of record


0 – record is not deleted, 1 – record is deleted
3.	LCountry:
Key: autCountryID
Purpose: Store the list of different Countries for a Customer		
Remarks:
No	Name	Type	Length	Purpose
1	autCountryID	int	3	Primary Key. System generates a unique id when any new record is created.
2	vchShortText	varchar	5	Short description for the record e.g. “IND”
3	vchLongText	varchar	25	Long description for the record e.g. “INDIA”
4	bitDelflag	bit	1	Field for logical deletion of record
0 – record is not deleted, 1 – record is deleted