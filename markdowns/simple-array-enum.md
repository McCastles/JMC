# Example Array Enum Schema
Parsed from file: [simple-array-enum.json](https://github.com/McCastles/JMC/blob/master/examples/simple-array-enum.json)

Simple schema with array with enumerated values.
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