# __Example Schema__

Parsed from file: [testTuple.json](https://github.com/McCastles/JMC/blob/master/examples/outer/testTuple.json)
> Illustrating work with outer definitions file
* [Properties](#properties)
	* [automobile_shop](#automobile_shop)
		* [automobile_shop[0]](#automobile_shop[0])
## __Properties__
|Key|Type|Format|Required|Description|
|-|:-:|:-:|:-:|-|
|__automobile_shop__|[array](#automobile_shop)|*|no|Shop with automobiles|
### __automobile_shop__
_Shop with automobiles_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__automobile_shop[0]__|[object](#automobile_shop[0])|*|no|[automobile_shop](#automobile_shop)|Particular shop|
### __automobile_shop[0]__
_Particular shop_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__auto__|[proxyAutomobile](./definitions/proxy.md#proxyAutomobile)|*|no|[automobile_shop[0]](#automobile_shop[0])|The automobile that can be bought here|
|__address__|[proxyAddress](./definitions/proxy.md#proxyAddress)|*|no|[automobile_shop[0]](#automobile_shop[0])|Shop's address|