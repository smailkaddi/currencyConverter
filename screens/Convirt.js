
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
export default function Convirt() {


    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    console.log(data);
  
    useEffect(() => {
      fetch('http://data.fixer.io/api/latest?access_key=1cb36148cf3f69608b9c90c3c7dcca39')
        .then((response) => responsnpe.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
  
    return (
  
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <Text>Loading...</Text> : 
        ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
             <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Articles:</Text>
            
            <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.rates}</Text>
           
            <FlatList
              data={data.articles}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Text>{item.id + '. ' + item.rates}</Text>
              )}
            />
          </View>
        )}
      </View>
    );
    
}
