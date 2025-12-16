import requests  

url = "https://seanneilan.com/"  
response = requests.get(url)  
with open("seanneilan.com", "w") as file:  
    file.write(response.text)