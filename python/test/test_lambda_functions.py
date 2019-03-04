import pytest, numpy as np
from .index import lambda_functions

tuples = [(1,2), (2,4), (5, 1), (3,4)]
arr = [1,2,3,4,5]

# Test Fixtures - TBD

def test_sum():
    assert lambda_functions.sumCustom(arr) == 15

def test_map():
    assert lambda_functions.mapCustom(arr) == [2,3,4,5,6]

def test_filter():
    assert lambda_functions.filterCustom(arr) == [2,4]

def test_sort():
    assert np.array_equal(lambda_functions.sortCustom(tuples),[(5,1), (1,2), (2,4), (3,4)])