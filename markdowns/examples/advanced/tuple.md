# __Example Schema__

Parsed from file: [tuple.json](https://github.com/McCastles/JMC/blob/master/examples/advanced/tuple.json)
> Schema with a tuple array (array with items of different types)
* [Properties](#properties)
	* [guests](#guests)
## __Properties__
|Key|Type|Format|Required|Description|
|-|:-:|:-:|:-:|-|
|__guests__|[array](#guests)|*|yes|List of guests|
### __guests__
_List of guests_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__guests[0]__|string|hostname|no|[guests](#guests)|Name of the person|
|__guests[1]__|string|*|no|[guests](#guests)|Gender of the person. Possible values: `Male` `Female`|
|__guests[2]__|number|email|no|[guests](#guests)|Email of the person|