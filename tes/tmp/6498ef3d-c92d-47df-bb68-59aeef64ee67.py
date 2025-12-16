import requests  
import os  

url = "https://seanneilan.com/"  
response = requests.get(url)  
with open(os.path.join(os.getcwd(), "seanneilan.html"), "w") as f:  
    f.write(response.text)