class Class:
    def __init__(self, unique_id, prof, course_num, name, id):
        self.unique_id = unique_id;
        self.prof = prof;
        self.course_num = course_num;
        self.name = name;
        self.key = id;
    def get_map(self):
        return {'unique_id' : self.unique_id,
                'prof': self.prof,
                'course_num': self.course_num,
                'name': self.name,
                'key': self.key};
def map_to_class(row):
    return Class(row['unique_id'], row['professor'], row['course_num'], row['name'], row['id'])

class Item:
    def __init__(self, name, image_url, price, isbn):
        self.name = name;
        self.image_url = image_url;
        self.price = price;
        self.isbn = isbn;
    def get_map(self):
        return {'name' : self.name,
                'image_url' : self.image_url,
                'price': float(self.price),
                'isbn': self.isbn};
def map_to_item(row):
    return Item(row['name'], row['image_url'], row['price'], row['isbn']);
