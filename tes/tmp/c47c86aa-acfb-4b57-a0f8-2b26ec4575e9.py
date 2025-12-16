import requests  

url = "https://seanneilan.com/"  
response = requests.get(url)  
with open("file.txt", "wb") as f:  
    f.write(response.content)