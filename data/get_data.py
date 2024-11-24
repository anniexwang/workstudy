import requests
import json

def getCharacterData(character):

    baseUrl = 'https://cdn.jsdelivr.net/npm/hanzi-writer-data@latest/'
  
    url = baseUrl + character + ".json"

    response = requests.get(url)

    print(url)

    with open(r'/Users/anniewang/work_study/chinese-writer/data/data1.json', "w") as f:
        print(response.text, file=f)
  
getCharacterData('口')

# def _parseJson(data):
#     return json.loads(data.replace("'", '"'))

# _parseJson('chinese-writer/data/data.Json')