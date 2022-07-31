create table Cities(city varchar(10), state varchar(20),unique primary key(city));
insert into Cities(city,state) values ('Mumbai','Maharashtra');
insert into Cities(city,state) values ('Pune','Maharashtra');
insert into Cities(city,state) values ('NCR','Delhi');

create table Warehouse(WID int(10), WName varchar(20), Location varchar(50), foreign key(Location) references Cities(city));
 insert into Warehouse(WID,WName,Location) values(1,'puneStore','Pune');
insert into Warehouse(WID,WName,Location) values(2,'penStore','Mumbai');
insert into Warehouse(WID,WName,Location) values(3,'stationaryStore','Pune');

create table store(sid int(100),store_name varchar(50),location_city varchar(20),wid int(100),foreign key(wid) references warehouse(wid),primary key(sid));
insert into store values(1,'sanjeevan','Pune',1);
insert into store values(2,'sangitam','Pune',1);
insert into store values(3,'mangla','Mumbai',2);

create table customer(cno int,cname varchar(20),addr varchar(50),cu_city varchar(10),primary key(cno));
insert into customer values(22,'aditya','pune wada','Pune');
insert into customer values(25,'Chaudhari','Ghatkopar','Mumbai');
insert into customer values(34,'Animal','akurdi','Pune');

create table orders(ono int,odate date,primary key(ono));
insert into orders values('234','2022-05-10');
insert into orders values('435','2022-05-10');
insert into orders values('965','2022-06-11');


create table items(itemno int,description varchar(100),weight int,cost int,primary key(itemno));
insert into items values(232,'laptop',2,30000);
insert into items values(345,'gas stove',5,10000);
insert into items values(256,'refrigerator',50,20000);

-- junction table for orders and items
create table jordersitems(ono int,itemno int,cno int,ordered_quantity int,foreign key(ono) references orders(ono),foreign key(itemno) references items(itemno),foreign key(cno) references customer(cno));
insert into jordersitems values(1,232,22,1);
insert into jordersitems values(1,345,22,2);
insert into jordersitems values(234,345,25,1);
insert into jordersitems values(435,345,25,1);
insert into jordersitems values(965,345,25,1);

-- junction table for store and items
create table jstoreitems(sid int,itemno int,quantity int,foreign key(sid) references store(sid),foreign key(itemno) references items(itemno));
insert into jstoreitems values(1,232,10);
insert into jstoreitems values(2,232,10);
insert into jstoreitems values(1,256,5);
insert into jstoreitems values(3,345,20);