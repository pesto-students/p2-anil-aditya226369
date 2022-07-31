1).Find the item that has minimum weight
query): select * from items where weight = (select min(weight) from items);

2).Find the different warehouses in “Pune”
query): select * from warehouse where location = 'Pune';

3).Find the details of items ordered by a customer “Mr. Patil”.
query): select customer.cname,items.itemno,description,weight,cost from customer,jordersitems,items where jordersitems.cno = customer.cno and items.itemno = jordersitems.itemno and customer.cname = 'Mr.Patil';

4).Find a Warehouse which has maximum stores.
query): select wname from warehouse inner join (select wid,max(filtered.wid_count) from (select wid,count(wid) as wid_count from store group by wid) as filtered) as maxcount where warehouse.wid = maxcount.wid;

5).Find an item which is ordered for a minimum number of times
query): select items.itemno,description,weight,cost from items,(select min(itemno) as min_itemno from jordersitems) as filtered where filtered.min_itemno = items.itemno;

6).Find the detailed orders given by each customer.
query): select customer.cname,orders.* from jordersitems,customer,orders where customer.cno = jordersitems.cno and jordersitems.ono = orders.ono;