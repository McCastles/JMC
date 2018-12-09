# __Example Schema__

Parsed from file: [tuple-object.json](https://github.com/McCastles/JMC/blob/master/examples/advanced/tuple-object.json)
> Schema with a tuple array (array with items of different types), one of which is an object
* [Properties](#properties)
	* [guests](#guests)
		* [guests[0]](#guests[0])
## __Properties__
|Key|Type|Format|Required|Description|
|-|:-:|:-:|:-:|-|
|__guests__|[array](#guests)|*|yes|Invited guests|
### __guests__
_Invited guests_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__guests[0]__|[object](#guests[0])|*|no|[guests](#guests)|One of the guests|
### __guests[0]__
_One of the guests_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__name__|string|*|no|[guests[0]](#guests[0])|Name of the guest|
|__surname__|string|*|yes|[guests[0]](#guests[0])|Surname of the guest|
|__age__|number|*|no|[guests[0]](#guests[0])|Age of the guest|