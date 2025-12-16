import requests  

url = "https://seanneilan.com/"  
response = requests.get(url)  
with open("file_to_save.txt", "w") as f:  
    f.write(response.text)