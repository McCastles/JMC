# __Example Array Enum Schema__
Parsed from file: [tuple-array-enum.json](https://github.com/McCastles/JMC/blob/master/examples/tuple-array-enum.json)

_Tuple array schema._
## __Structure__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__people__|[object[]](#people)|+|List of guests.|
### __people__
_List of guests._

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__Item1__|string|-|Guest's surname. Possible values: `Lennon` `McCartney` `Harrison` `Starr`. Default is `Starr`.|
|__Item2__|number|-|Place.|
## __Example__
```
{
	"people": [
		"Starr",
		42
	]
}
```