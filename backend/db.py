#Custom classes to store data
from web_objs import *
import MySQLdb, MySQLdb.cursors

db = MySQLdb.connect(host="localhost", user="root", passwd="ilikecode", db="totc", cursorclass=MySQLdb.cursors.DictCursor)
sql = db.cursor()

#Return list<String> of school names
def get_schools(name):
    print(name)
    sql.execute("select * from schools where name like '%%%s%%' " % (name))
    data = sql.fetchall()
    print(data)
    return data;

def get_school_name(id):
    sql.execute("select * from schools where id = %d " % (id))
    data = sql.fetchall()
    return data;

#Return list<Class> of classes like this
#Unique_id, prof, course_num and name may be None
def get_classes(school, unique_id, prof, course_num, name):
    unique_id_query = "1=0" if unique_id == None else ("unique_id = %d" % unique_id)
    prof_query = "1=0" if prof == None else ("professor like '%%%s%%'" % prof)
    course_num_query = "1=0" if course_num == None else ("course_num = %d" % course_num)
    name_query = "1=0" if name == None else ("name like '%%%s%%'" % name)
    print("select * from classes where school_id = %d and (%s or %s or %s or %s)" % (school, unique_id_query,prof_query,course_num_query,name_query))
    sql.execute("select * from classes where school_id = %d and (%s or %s or %s or %s)" % (school, unique_id_query,prof_query,course_num_query,name_query))
    data = sql.fetchall()
    return list(map(lambda x: map_to_class(x), data))

#Using class id (defined by database not by university)
#Return Class object for specified class
def get_class(id):
    sql.execute("select * from classes where id = '%d' " % (id))
    data = sql.fetchone()
    return map_to_class(data);

#Using class id (defined by database not by university)
#Return list<Item> object for specified class
def get_class_item_list(id):
    sql.execute("select * from items where class_id = '%d' " % (id))
    data = sql.fetchall()
    return list(map(lambda x: map_to_item(x), data))

