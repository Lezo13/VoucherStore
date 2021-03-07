CREATE PROCEDURE [dbo].[sp_InsertVouchersOrders]
	@itemid UNIQUEIDENTIFIER,
	@orderno UNIQUEIDENTIFIER,
	@itemqty int

AS

	INSERT INTO
		[dbo].[VouchersOrders] (ItemID, OrderNo, ItemQty)
	VALUES
		(@itemid, @orderno, @itemqty)
RETURN 0
