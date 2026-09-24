import urllib.request
from bs4 import BeautifulSoup

try:
    with urllib.request.urlopen("https://pharmacyvancouver.ca") as response:
        html = response.read().decode('utf-8')
        soup = BeautifulSoup(html, "html.parser")
        print(soup.get_text()[:1500])
except Exception as e:
    print("Error:", e)
