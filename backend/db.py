#Custom classes to store data
from web_objs import Class, Item
import MySQLdb

db = MySQLdb.connect(host="localhost", user="root", passwd="", db="totc")
sql = db.cursor()

#Return list<String> of school names
def get_schools(name):
    sql.execute("select * from schools where name = '%s' " % (name))
    data = sql.fetchall()
    return data;

#Return list<Class> of classes like this
#Unique_id, prof, course_num and name may be None
def get_classes(school, unique_id, prof, course_num, name):
    sql.execute("select * from classes where school_id = (select id from schools where name = '%s' limit 1) and (unique_id = '%d' or professor = '%s' or course_num = '%d' or name = '%s')" % (school, unique_id, prof, course_num, name))
    data = sql.fetchall()
    return data;

#Using class id (defined by database not by university)
#Return Class object for specified class
def get_class(id):
    sql.execute("select * from classes where id = '%d' " % (id))
    data = sql.fetchone()
    return data;

#Using class id (defined by database not by university)
#Return list<Item> object for specified class
def get_class_item_list(id):
    sql.execute("select * from items where class_id = '%d' " % (id))
    data = sql.fetchall()
    return data;

