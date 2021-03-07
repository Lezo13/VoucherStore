CREATE PROCEDURE [dbo].[sp_InsertRecipient]
	@recipientid UNIQUEIDENTIFIER,
	@recipientemail VARCHAR(254),
	@recipientname VARCHAR(70)

AS

	INSERT INTO
		[dbo].[Recipients] ([RecipientID], [RecipientEmail], [RecipientName])
	VALUES
		(@recipientid, @recipientemail, @recipientname)
RETURN 0
