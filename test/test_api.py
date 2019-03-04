from .index import app
from flask import request
import pytest, json

# This client fixture will be called by each individual test. 
@pytest.fixture
def client():
    app.testing = True
    c = app.test_client()
    return c

def login(client, uid = 'hpan', pwd = 'henry'):
    return client.post('/login', data=dict(
        uid=uid,
        pwd=pwd
    ))

def test_index(client):
    res = client.get('/')
    assert res.data == b'index page'

def test_login(client):
    res = login(client, 'hpan', 'asdf')
    assert res.data == b'Invalid uid or pwd'

    res = login(client)
    assert res.data == b'Logged in as hpan'

    res = login(client, 'hpan', 'asdf')
    assert res.data == b'Logged in as hpan'


def test_logout(client):
    res = client.get('logout')
    assert res.data == b'Not logged in'
    
    res = login(client)
    assert res.data == b'Logged in as hpan'

    res = client.get('logout')
    assert res.data == b'Logged out'

def test_post(client):
    import os
    data = dict(key='val',key2='val2')
    subpath = 'sbpath'
    id = 123
    path = '/' + os.path.join('postRequest', subpath, str(id))
    res = client.post(path, data=data).get_json()
    totalItems = 3 + len(data)
    assert len(res) == totalItems
    assert res['path'] == path
    assert res['subpath'] == subpath
    for key in data:
        assert res[key] == data[key]