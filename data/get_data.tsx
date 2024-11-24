void function getCharacterData(character: string) {
    const baseUrl = 'https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0.1/';
  
    const url = baseUrl.concat(character);

    let data = ''
    fetch(url).then(function(response) {
        return response.json()
    })
    .then(function(myJson) {
        data = myJson
        console.log(data)
    })

    // const response = await client.get(url);
  
    // if (response.statusCode != 200) {
    //   throw Exception("Failed to get stroke order for '$character'");
    // }
  
    // return response.body;
  }