import os

path = 'franzmori Webpage/img/'
results = {}

for root, directories, filenames in os.walk(path):
    directory = root.replace(path, '')
    # print(directories)
    #print(filenames)

    if directory != '':
        for filename in filenames:
            if directory in results:
                results[directory].append(filename)
            else:
                results[directory] = [filename]
            # print(os.path.join(root,filename))

for category in results:
    results[category].sort(reverse=True)

print(results)
