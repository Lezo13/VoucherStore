CREATE PROCEDURE [dbo].[sp_GetSenderID]
	@senderemail VARCHAR(254),
	@sendername VARCHAR(70)
AS
	SELECT SenderID 
	FROM [dbo].[Senders]
	WHERE SenderEmail = @senderemail AND SenderName = @sendername

RETURN 0
