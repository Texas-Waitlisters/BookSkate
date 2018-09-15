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

@app.route('/getclasses')
def search_classes():
    school = request.args.get('school')
    unique_id = request.args.get('unique_id')
    prof = request.args.get('prof')
    course_num = request.args.get('course_num')
    name = request.args.get('name')
    data = {'classes': list(map(lambda x: x.get_map(), get_classes(school, unique_id, prof, course_num, name)))}
    resp = Response(json.dumps(data), mimetype='application/json')
    return resp

@app.route('/getclass')
def search_class():
    key = request.args.get('key')
    data = {'class': get_class(key).get_map(), 'items': list(map(lambda x: x.get_map(), get_class_item_list(key)))};
    resp = Response(json.dumps(data), mimetype='application/json')
    return resp

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=80)
