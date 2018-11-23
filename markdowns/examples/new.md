# __New__
> Simple new deep

Parsed from file: [new.json](https://github.com/McCastles/JMC/blob/master/examples/simple/simple-deep.json)
* [Properties](#properties)
	* [prop10](#prop10)
		* [prop11](#prop11)
			* [prop12](#prop11)
		* [prop13](#prop10)
	* [prop20](#prop20)
		* [prop21](#prop20)
	* [prop30](#properties)
* [Example](#example)
## __Properties__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__prop10__|[object](#prop10)|-|Lack of descripton|
|__prop20__|[object](#prop20)|+|Lack of descripton|
|__prop30__|string|-|Lack of descripton|
### __prop10__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__prop11__|[object](#prop11)|-|Lack of descripton|
|__prop13__|string|-|Lack of descripton|
### __prop11__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__prop12__|string|+|Lack of descripton|
### __prop20__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__prop21__|string|-|Lack of descripton|
## __Example__
```
{
    "prop10": {
        "prop11": {
            "prop12": "Sample string"
        },
        "prop13": "Sample string"
    },
    "prop20": {
        "prop21": "Sample string"
    },
    "prop30": "Sample string"
}
```