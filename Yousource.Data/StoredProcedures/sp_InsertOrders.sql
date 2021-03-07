CREATE PROCEDURE [dbo].[sp_InsertOrders]
	@senderID UNIQUEIDENTIFIER,
	@recipientID UNIQUEIDENTIFIER,
	@dedication VARCHAR(MAX),
	@totalSpent int

AS

	INSERT INTO
		[dbo].[Orders] (SenderID, RecipientID, Dedication, TotalSpent)
	VALUES
		(@senderID, @recipientID, @dedication, @totalSpent)
RETURN 0
