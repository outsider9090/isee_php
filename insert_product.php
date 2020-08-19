<?php
//include_once( 'send_product.php' );

try{
	$myPDO = new PDO('pgsql:host=localhost;port=5432;dbname=postgres', 'postgres', '172839');
	$myPDO -> exec("SET NAMES 'UTF8'");
	$myPDO -> exec("SET character_set_connection='UTF8'");
}catch (PDOException $err){
	echo 'error in connection' . $err -> getmessage();
}


if (isset($_POST['btn_send_product'])){
	$attr_names = $_POST['attribName'];
	$attr_values = $_POST['attribValue'];
	$size = 0;
	foreach ($attr_names as $value)
	{
		$size++;
	}
	$array = [];
	for ($i=0; $i<$size; $i++){
		$array[$attr_names[$i]['name']] = $attr_values[$i]['value'];
	}
	$attr_json = '{"Attributes":' . json_encode($array) . '}';


	$doc_types = $_POST['docType'];
	$doc_names = $_POST['docName'];
	$doc_urls = $_POST['docUrl'];
	$size = 0;
	foreach ($doc_types as $value)
	{
		$size++;
	}
	$array0 = [];
	$array = [];
	for ($i=0; $i<$size; $i++){
		$array['Name'] = $doc_names[$i]['name'];
		$array['Url'] =  $doc_urls[$i]['url'];
		$array0[$doc_types[$i]['type']] = [$array];
	}
	$doc_json = '{"Documents":' . json_encode($array0) . '}';

//	var_dump($doc_json);

	$final_json = $doc_json .','. $attr_json;

	var_dump($final_json);
}


$insert = $myPDO->query("INSERT INTO xproduct_202008041139 (dkj) VALUES('$final_json') ");
//$insert = $myPDO->query("INSERT INTO xproduct_202008041139 (dkj) VALUES(' \"Attributes\": { \"customer\": \"John Doe\", \"items\": {\"product\": \"Beer\",\"qty\": 6}} ')");
