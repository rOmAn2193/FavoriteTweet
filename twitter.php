<?php 
require_once('OAuth.php');
require_once('twitteroauth.php'); // path to twitteroauth library

$consumerkey = 'LenfD98lAtTRfhXV0K4GA';
$consumersecret = 'abi7W5E1dhH8wilgLqz2KpJ0IoPvnwfhpPAj1oeKU';
$accesstoken = '158042870-YDgH90Vja1x8B0CXuOdr7EqEbBkjbVCbavQrPnMs';
$accesstokensecret = 'ktUhtTj8fRSuegIT1fN4ifcZapMyWjBdVwusSRbNTFI66';

$twitter = new TwitterOAuth($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
print_r($twitter);

$tweets = $twitter->get('https://api.twitter.com/1.1/search/tweets.json');
print_r($tweets);
?>