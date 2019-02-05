from flask import Flask, request, make_response, render_template, session
import pprint as pp

mapObj = {}
app = Flask(__name__)
app.secret_key = b'l1j13!/jk/f\190/3'


@app.route('/')
def index():
    return 'index page'

@app.route('/hello')
def hello():
    return 'Hello world!'

@app.route('/login', methods=['POST'])
def login():
    res = make_response()
    print(session)
    if 'isAuth' in session:
        return ('Logged in as ' + str(session['uid']))
    elif ((request.form.get('uid') == 'hpan' and request.form.get('pwd') == 'henry')):
        session['uid'] = 'hpan'
        session['isAuth'] = True
        res.set_cookie('sampleCookie', 'sampleCookieVal')
        res.headers.add('sampleHeader', {'headerKey', 'headerVal'})
        print(request.cookies)
        return res
    else:
        return res

@app.route('/logout')
def logout():
    if 'isAuth' in session:
        session.pop('isAuth', None)
    return 'Logged out'


@app.route('/postRequest/<path:subpath>/<int:id>', methods=['POST'])
def testPost(subpath, id):
    print('\n\nParsing parameters: ')
    print('Method: ' + str(request.method))
    print('Path: ' + str(request.path))
    print('Request.form: ' + pp.pformat((request.form)))
    print('Subpath: ' + str(subpath))
    print('Id: ' + str(id))
    return str(mapObj)