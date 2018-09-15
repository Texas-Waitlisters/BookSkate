class Class:
    def __init__(self, unique_id, prof, course_name, name, id):
        self.unique_id = unique_id;
        self.prof = prof;
        self.course_name = course_name;
        self.name = name;
        self.key = id;
    def get_map(self):
        return {'unique_id' : self.unique_id,
                'prof': self.prof,
                'course_name': self.course_name,
                'name': self.name,
                'key': self.key};

class Item:
    def __init__(self, name, image_url, price, isbn):
        self.name = name;
        self.image_url = image_url;
        self.price = price;
        self.isbn = isbn;
    def get_map(self):
        return {'name' : self.name,
                'image_url' : self.image_url,
                'price': self.price,
                'isbn': self.isbn};
