import requests  

url = "https://seanneilan.com/"  
response = requests.get(url)  
with open("seanneilan.com", "wb") as file:  
    file.write(response.content)