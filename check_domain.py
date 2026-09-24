import urllib.request
try:
    with urllib.request.urlopen("https://pharmacyvancouver.ca") as response:
        html = response.read().decode('utf-8')
        print(html[:500])
except Exception as e:
    print("Error:", e)
