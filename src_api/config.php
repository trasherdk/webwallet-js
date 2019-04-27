<?php
$nodesList = array(
	"localhost",
	"node-00.qwertycoin.org",
	"node-01.qwertycoin.org",
	"node-02.qwertycoin.org",
	"node-03.qwertycoin.org",
	"node-04.qwertycoin.org"
);
$randNode = array_rand($nodesList, 2);

$testnet = false;
$cacheLocation = __DIR__.'/'.($testnet ? 'cache-testnet' : 'cache');
$daemonAddress = $nodesList[$randNode[0]];
$rpcPort = $testnet ? 8197 : 8197;
$coinSymbol = 'qwc';
