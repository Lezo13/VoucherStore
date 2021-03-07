CREATE PROCEDURE [dbo].[sp_InsertSender]
	@senderid UNIQUEIDENTIFIER,
	@sendername VARCHAR(70),
	@senderemail VARCHAR(254)

AS

	INSERT INTO
		[dbo].[Senders] ([SenderID], [SenderEmail], [SenderName])
	VALUES
		(@senderid, @senderemail, @sendername)
RETURN 0
