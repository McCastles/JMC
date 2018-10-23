# __Example Array Enum Schema__
Parsed from file: [simple-array-enum.json](https://github.com/McCastles/JMC/blob/master/examples/simple/simple-array-enum.json)

_Simple schema_
## __Structure__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__people__|[object[]](#people)|+|List of guests|
### __people__
_List of guests_

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__Item1__|string|-|Guest's surname Possible values: `Lennon` `McCartney` `Harrison` `Starr`. Default is `Starr`.|