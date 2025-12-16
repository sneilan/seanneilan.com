import requests  

url = 'https://seanneilan.com/'  
response = requests.get(url)  
with open('seanneilan.html', 'w') as file:  
    file.write(response.text)