db.createUser(
{
	user: "root",
	pwd:"181173",
	roles:[
	{
		role: "readWrite",
		db: "bidenergy"
	}]
})