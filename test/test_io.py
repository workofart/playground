import os, numpy as np
from .index import io_functions
l = [1,2,3,4,5]
filename = 'temp.txt'
filename2 = 'temp2.txt'

def getPath(f):
    return os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'data', f))

def test_writeToFile():
    tmp = l
    io_functions.writeToFile(l, getPath(filename))
    with open(getPath(filename), 'r') as f:
        lines = [int(l.replace('\n', '')) for l in f.readlines()]
        tmp.extend([12345]) # extend is done in-place
        assert np.array_equal(lines, tmp)

def test_writeToFileLbyL():
    io_functions.writeToFileLbyL(l, os.path.join(os.path.dirname(__file__), '..', 'data', getPath(filename2)))
    with open(getPath(filename2), 'r') as f:
        lines = [int(l.replace('\n', '')) for l in f.readlines()]
        assert np.array_equal(lines, l)