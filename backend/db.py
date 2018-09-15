#Custom classes to store data
from web_objs import Class, Item

#Return list<String> of school names
def get_schools(name):
    return ["UT","Rice"];

#Return list<Class> of classes like this
#Unique_id, prof, course_num and name may be None
def get_classes(school, unique_id, prof, course_num, name):
    return [Class("12345","bill young","cs429","computer architecture",15)];

#Using class id (defined by database not by university)
#Return Class object for specified class
def get_class(id):
    return Class("12345","bill young","cs429","computer architecture",15);

#Using class id (defined by database not by university)
#Return list<Item> object for specified class
def get_class_item_list(id):
    return [Item("Textbook","/image1.png",50,"12345")];
