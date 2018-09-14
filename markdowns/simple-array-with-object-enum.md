# Example Array With Object Enum Schema
Parsed from file: [simple-array-with-object-enum.json](https://github.com/McCastles/JMC/blob/master/examples/simple-array-with-object-enum.json)

Simple schema with array (one of the values is an object) with enumerated values.
## Structure

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|people|[object[]](#people)|+|List of guests.|
### people
List of guests.

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|item1|string|-|Guest's surname. Possible values: `Lennon` `McCartney` `Harrison` `Starr`|
|item2|number|-|Place.|
|item3|[object](#item3)|-|Children of the person.|
### item3
Children of the person.

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|name|string|+|Name of the kid.|
|surname|string|+|Surname of the kid.|
|telephone|number|-|Telephone number of the kid.|