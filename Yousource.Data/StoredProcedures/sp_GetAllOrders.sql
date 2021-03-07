CREATE PROCEDURE [dbo].[sp_GetAllOrders]
AS
	SELECT OrderDate, O.OrderNo, TotalSpent, SenderEmail, SenderName, RecipientEmail, RecipientName, Dedication
	FROM Senders as S
	INNER JOIN Orders as O
	ON S.SenderID = O.SenderID
	INNER JOIN Recipients as R
	ON O.RecipientID = R.RecipientID
	ORDER BY OrderDate
RETURN 0
