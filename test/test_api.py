from .index import app
from flask import request
import pytest

# This client fixture will be called by each individual test. 
@pytest.fixture
def client():
    app.testing = True
    c = app.test_client()
    return c

def test_index(client):
    res = client.get('/')
    assert res.data == b'index page'