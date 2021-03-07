CREATE PROCEDURE [dbo].[sp_GetOrdersByEmail]
	@senderEmail as VARCHAR(254)
AS
	SELECT OrderDate, O.OrderNo, TotalSpent, SenderEmail, SenderName, RecipientEmail, RecipientName, Dedication
	FROM Senders as S
	INNER JOIN Orders as O
	ON S.SenderID = O.SenderID
	INNER JOIN Recipients as R
	ON O.RecipientID = R.RecipientID
	WHERE SenderEmail = @senderEmail
	ORDER BY OrderDate
RETURN 0
