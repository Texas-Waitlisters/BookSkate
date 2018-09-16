from flask import Flask, request, Response
from flask_cors import CORS
from web_objs import Class, Item
from db import *
import json
app = Flask(__name__)
CORS(app)

@app.route('/schoolsearch')
def school_search():
    school = request.args.get('school')
    data = {'schools': get_schools(school)}
    resp = Response(json.dumps(data), mimetype='application/json')
    return resp

@app.route('/getschoolname')
def school_name():
    id = int(request.args.get('key'))
    data = {'school': get_school_name(id)}
    resp = Response(json.dumps(data), mimetype='application/json')
    return resp

@app.route('/getclasses')
def search_classes():
    key = int(request.args.get('key'))
    unique_id = request.args.get('unique_id')
    unique_id = None if unique_id == None else int(unique_id)
    prof = request.args.get('prof')
    course_num = request.args.get('course_num')
    course_num = None if course_num == None else int(course_num)
    name = request.args.get('Name')
    data = {'classes': list(map(lambda x: x.get_map(), get_classes(key, unique_id, prof, course_num, name)))}
    resp = Response(json.dumps(data), mimetype='application/json')
    print(data)
    return resp

@app.route('/getclass')
def search_class():
    key = int(request.args.get('key'))
    data = {'class': get_class(key).get_map(), 'items': list(map(lambda x: x.get_map(), get_class_item_list(key)))};
    resp = Response(json.dumps(data), mimetype='application/json')
    return resp

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000)
