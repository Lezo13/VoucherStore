CREATE PROCEDURE [dbo].[sp_GetRecipientID]
	@recipientemail VARCHAR(254),
	@recipientname VARCHAR(70)
AS
	SELECT RecipientID 
	FROM [dbo].[Recipients]
	WHERE RecipientEmail = @recipientemail AND RecipientName = @recipientname

RETURN 0
