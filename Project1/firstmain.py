import re
import requests

cd = ["https://www.google.com", "https://www.bing.com", "www.python.com"]

for i in range(len(cd)):
    r = re.search(r"https://(.+)[com]", cd[i])
    if r:
        print("YESSIR")
    else:
        print("non")

r = requests.get("https://andradInsight.github.io")

print(re.match(r"[<p>](.+)[</p>]", r.text))