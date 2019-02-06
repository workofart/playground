import pytest, numpy as np
from .index import lambda_functions

tuples = [(1,2), (2,4), (5, 1), (3,4)]
arr = [1,2,3,4,5]

# Test Fixtures - TBD

def test_sum():
    assert lambaFunctions.sumCustom(arr) == 15

def test_map():
    assert lambaFunctions.mapCustom(arr) == [2,3,4,5,6]

def test_filter():
    assert lambaFunctions.filterCustom(arr) == [2,4]

def test_sort():
    assert np.array_equal(lambaFunctions.sortCustom(tuples),[(5,1), (1,2), (2,4), (3,4)])