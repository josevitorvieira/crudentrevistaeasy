# Documentação api easy

## baseUrl Heroku : https://crudentrevistaeasy.herokuapp.com

## baseUrl Cloud : https://ace-sector-318700.rj.r.appspot.com

### POST /employee
#### BODY

<pre> 
    {
        id:String,
        name:String,
        cpf:String,
        address:{
            street:String,
            number:Number,
            district:String,
            city:String,
            state:String,
            country:String, 
            zipCode:String           
        },
        office:String,
        age:String,
    }
 </pre>

#### RESPONSE

<pre> 
 {
  "_id": "60dfc14b3e03e116444c993e",
  "name": "Ruan",
  "cpf": "224.544.386-15",
  "address": {
    "street": "Mato Grosso",
    "number": 10,
    "district": "Cuiabá",
    "city": "Arapiraca",
    "state": "Alagoas",
    "country": "Brasil",
    "zipCode": "57300-000"
  },
  "office": "Desabrigado",
  "age": "31",
  "id": "GiNQYZyOA",
  "__v": 0
 }
</pre>

---

### GET /employee

 <br />

#### RESPONSE

 <pre>
  [
     {
    "address": {
      "street": "Acre",
      "number": 1,
      "district": "Rio Branco",
      "city": "Arapiraca",
      "state": "Alagoas",
      "country": "Brasil",
      "zipCode": "57300-000"
    },
    "_id": "60de606d9fbbb933e46796fd",
    "name": "João",
    "cpf": "001.053.782-16",
    "office": "administrador",
    "age": "23",
    "id": "QOp4FS51z",
    "__v": 0
  }
]
</pre>

---

### GET /employee/{id}

### RESPONSE

<pre>
{
  "address": {
    "street": "Amazonas",
    "number": 3,
    "district": "Manaus",
    "city": "Arapiraca",
    "state": "Alagoas",
    "country": "Brasil",
    "zipCode": "57300-000"
  },
  "_id": "60de61059fbbb933e4679703",
  "name": "Maria",
  "cpf": "813.572.464-04",
  "office": "Advogado",
  "age": "33",
  "id": "Pl5cqRU1M",
  "__v": 0
}
</pre>

---

### PUT /employee/{id}
#### BODY
<pre> 
{
  "_id": "60de616acd015e2c94b2ff12",
  "name": "Joana",
  "cpf": "386.171.744-12",
    {
  "address": {
    "street": "Bahia",
    "number": 4,
    "district": "Salvador",
    "city": "Arapiraca",
    "state": "Alagoas",
    "country": "Brasil",
    "zipCode": "57300-000"
  },
  "office": "Trade Representative",
  "age": "45",
  "id": "dStAnW-Db",
  "__v": 0
}

</pre>
 
#### RESPONSE

 <pre>
{
  "address": {
    "street": "Bahia",
    "number": 4,
    "district": "Salvador",
    "city": "Arapiraca",
    "state": "Alagoas",
    "country": "Brasil",
    "zipCode": "57300-000"
  },
  "_id": "60de616acd015e2c94b2ff12",
  "name": "Joana",
  "cpf": "386.171.744-12",
  "office": "Trade Representative",
  "age": "45",
  "id": "dStAnW-Db",
  "__v": 0
}
</pre>

---

### DELETE /employee/{id}

<br />

### RESPONSE

<pre>

{
  "n": 1,
  "opTime": {
    "ts": "6980099296620183555",
    "t": 16
  },
  "electionId": "7fffffff0000000000000010",
  "ok": 1,
  "$clusterTime": {
    "clusterTime": "6980099296620183555",
    "signature": {
      "hash": "8qop0M80zBOv6Y+sg6I0UKrRKV8=",
      "keyId": "6947860425987850243"
    }
  },
  "operationTime": "6980099296620183555",
  "deletedCount": 1
}
 </pre>
