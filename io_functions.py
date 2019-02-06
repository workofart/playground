import os

def writeToFileLbyL(data, fileName=os.path.join('data', 'temp.txt')):
    with open(fileName, 'w') as f:
        for line in data:
            f.write(str(line)+ '\n')


def writeToFile(data, fileName=os.path.join('data', 'temp.txt')):
    with open(fileName, 'w') as f:
        # string.join -> It's because any iterable can be joined,
        # not just lists, but the result and the "joiner" are always strings.
        f.writelines('\n'.join(str(i) for i in data))
        f.write('\n')
        f.writelines(str(i) for i in data)