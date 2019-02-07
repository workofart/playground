from flask import Flask, request, make_response, render_template, session, jsonify
import pprint as pp

mapObj = {}
app = Flask(__name__)    
app.secret_key = b'l1j13!/jk/f\190/3'

@app.route('/')
def index():
    return 'index page'

@app.route('/login', methods=['POST'])
def login():
    res = make_response()
    if 'isAuth' in session:
        return 'Logged in as ' + str(session['uid'])
    if ((request.form.get('uid') == 'hpan' and request.form.get('pwd') == 'henry')):
        session['uid'] = 'hpan'
        session['isAuth'] = True
        res.set_cookie('sampleCookie', 'sampleCookieVal')
        res.headers.add('sampleHeader', {'headerKey', 'headerVal'})
        return 'Logged in as hpan'
    else:
        return 'Invalid uid or pwd'

@app.route('/logout')
def logout():
    if 'isAuth' in session:
        session.pop('isAuth', None)
        return 'Logged out'
    else:
        return 'Not logged in'


@app.route('/postRequest/<path:subpath>/<int:id>', methods=['POST'])
def testPost(subpath, id):
    mapObj['path'] = request.path
    mapObj['subpath'] = subpath
    mapObj['id'] = id
    for key in request.form:
        mapObj[key] = request.form[key]
    return jsonify(mapObj)
