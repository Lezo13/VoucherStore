CREATE TABLE [dbo].[Recipients]
(
	[RecipientID] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY , 
	[RecipientEmail] VARCHAR(254) NOT NULL, 
    [RecipientName] VARCHAR(70) NOT NULL
)
