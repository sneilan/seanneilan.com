import requests  

url = "https://seanneilan.com/"  
response = requests.get(url)  
with open("example.txt", "w") as file:  
    file.write(response.text)