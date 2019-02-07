from .index import app
from flask import request
import pytest

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


# TODO: json
def test_json_response(client):
    assert True