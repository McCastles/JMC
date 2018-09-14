# Simple tuple array schema
Parsed from file: [tuple-array.json](https://github.com/McCastles/JMC/blob/master/examples/tuple-array.json)

Simple schema with a tuple array (array with items of different types).
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