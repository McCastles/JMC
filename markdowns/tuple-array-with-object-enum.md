# __Example Array With Object Enum Schema__
Parsed from file: [tuple-array-with-object-enum.json](https://github.com/McCastles/JMC/blob/master/examples/simple/simple-array-with-object-enum.json)

_Simple schema with array (one of the values is an object) with enumerated values._
## __Structure__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__people__|[object[]](#people)|+|List of guests.|
### __people__
_List of guests._

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__Item1__|string|-|Guest's surname. Possible values: `Lennon` `McCartney` `Harrison` `Starr`|
|__Item2__|number|-|Place.|
|__Item3__|[object](#Item3)|-|Children of the person.|
### __Item3__
_Children of the person._

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__name__|string|+|Name of the kid.|
|__surname__|string|+|Surname of the kid.|
|__telephone__|number|-|Telephone number of the kid.|
## __Example__
```
{
	"people": [
		Lennon,
		42,
		{
			"name": "prompt sting",
			"surname": "prompt sting",
			"telephone": 42
		}
	]
}
```