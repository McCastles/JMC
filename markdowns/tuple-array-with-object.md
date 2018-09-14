# Tuple array schema with object
Parsed from file: [tuple-array-with-object.json](https://github.com/McCastles/JMC/blob/master/examples/tuple-array-with-object.json)

Schema with a tuple array (array with items of different types), one of which is an object.
## Structure

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|people|[object[]](#people)|+|Famous people.|
### people
Famous people.

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|item1|string|-|Name of the person.|
|item2|string|-|Surname of the person.|
|item3|number|-|Telephone number of the person.|
|item4|[object](#item4)|-|Children of the person.|
### item4
Children of the person.

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|name|string|+|Name of the kid.|
|surname|string|+|Surname of the kid.|
|telephone|number|-|Telephone number of the kid.|