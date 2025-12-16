import requests  

response = requests.get('https://seanneilan.com/')  
with open('seanneilan.html', 'w') as f:  
    f.write(response.text)