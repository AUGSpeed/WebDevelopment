**Michael LaRussa**

**NetID: fr5826**

# Homework 8

## Question 1


### (a)

For the login, the method is Post. 

The response code is 302. This code sends the user to another URL. 

HTTP version 1.1 is being used.

### (b)

POST /webapps/login/ HTTP/1.1
Host: bb.csueastbay.edu
Connection: keep-alive
Content-Length: 156
Cache-Control: max-age=0
Origin: https://bb.csueastbay.edu
Upgrade-Insecure-Requests: 1
DNT: 1
Content-Type: application/x-www-form-urlencoded
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Sec-GPC: 1
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Referer: https://bb.csueastbay.edu/
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9
Cookie: AWSELB=D3570BC914533D9ACC5FBEA2A258730F699E691A0AC95F4514958C9FF4BF56EAF7767641A55564A9BC1CBD75664AA49B92F6D22377D8ED04EB05777EC4EF6F24191B012DD8; AWSELBCORS=D3570BC914533D9ACC5FBEA2A258730F699E691A0AC95F4514958C9FF4BF56EAF7767641A55564A9BC1CBD75664AA49B92F6D22377D8ED04EB05777EC4EF6F24191B012DD8; JSESSIONID=17A1AC26420DFFCBA9F985E720830BD3; BbRouter=expires:1617651245,id:6658F114D958249BA14087DE4B863F05,signature:b1cf9283a96d4daaf4a1fd03df84594a225d4009d81e08a4275fa0fa5c92a7ca,site:aefdf5db-8c6a-4e8e-8bf7-fb9f1f4dcdf0,v:2,xsrf:2b55159c-43cb-4937-9944-e5e93000e08b

### (c)

HTTP/1.1 302
Cache-Control: private
Cache-Control: max-age=0
Cache-Control: no-store
Cache-Control: must-revalidate
Content-Security-Policy: frame-ancestors 'self'
Content-Type: text/html;charset=ISO-8859-1
Date: Mon, 05 Apr 2021 19:04:26 GMT
Expires: Sun, 05 Apr 2020 19:04:24 GMT
Last-Modified: Thu, 05 Apr 2001 19:04:24 GMT
Location: https://bb.csueastbay.edu/ultra
P3P: CP="CAO PSA OUR"
Pragma: private
Server: openresty/1.15.8.3
Set-Cookie: BbRouter=expires:1617660266,id:F773F5C1670D71A86EE74D96EA188BAB,signature:16426c6fd81f30f6b63c458afae085032fd9223af93bed9ac8f59ef9a1f93264,site:aefdf5db-8c6a-4e8e-8bf7-fb9f1f4dcdf0,timeout:10800,user:fc10498667884a05a1576d07f8b04aaf,v:2,xsrf:cfe5288d-7afc-401e-b115-45cbd4a9906d; Path=/; Secure; HttpOnly
X-Blackboard-appserver: ip-10-145-58-199.ec2.internal
X-Blackboard-product: Blackboard Learn &#8482; 3900.8.0-rel.37+0b5fb53
X-Frame-Options: SAMEORIGIN
Content-Length: 0
Connection: keep-alive
X-DNS-Prefetch-Control: off

### (d)

Server: openresty/1.15.8.3

Set-Cookie: BbRouter=expires:1617660266,id:F773F5C1670D71A86EE74D96EA188BAB,signature:16426c6fd81f30f6b63c458afae085032fd9223af93bed9ac8f59ef9a1f93264,site:aefdf5db-8c6a-4e8e-8bf7-fb9f1f4dcdf0,timeout:10800,user:fc10498667884a05a1576d07f8b04aaf,v:2,xsrf:cfe5288d-7afc-401e-b115-45cbd4a9906d; Path=/; Secure; HttpOnly

It seems like this is a router cookie? Perhaps saving the time you login? - That was my first guess, but looking at the "Timeout" field, I think that this is actually a cookie that will automatically log you out if you have been logged in for too long.

### (e)

This line of code first transforms the Date into an ISO string, which is in the format of: YYYY-MM-DDTHH:mm:ss.sssZ. This is then put all into lowercase, and then it is split by the character 't' into two parts of an array. Essentrially, Year, Month, and Day on one side, and Hour, Minute, Seconds on the other.

### (f)

1:
protocol: https
domain: mozilla
port: N/A
path: /en-US/docs/Web/JavaScript/Guide/Grammar_and_Types
query: N/A
fragment: #Comments

2:
protocol: https
domain: google
port: N/A
path: search
query: ?q=gaia+mission&rlz=1CYPO_enUS751
fragment: N/A

3:
protocol: http
domain: 127.0.0.2
port: 8282
path: /static/index.html
query: N/A
fragment: N/A

## Question 2

### (a)

Is this the start?
When does this print?
Is this the end?
this is a msg from CS651
This is a msg from CS351

This function prints the "When does this print?" and "Is this the end" before the logs in functions because we set them to have a timeout, and send after that time, which, even at 0, takes longer to happen then to simply go to the next line. Both of the timeouts are set to 0, since that is the default setting.

### (b)

This code creates 3 promise objects, each with individual names listed under 'resolve', and a random amount of timeout, then they are raced against each other to see which has the shortest timeout length.

To see who the winner is, we need to use a .then function on Promise.race(myPs), simply telling it to get the winner's resolve value and send it to function 'winner'. I did this:

```javascript

racingPs = Promise.race(myPs).then((resolve) => {
	winner(resolve);
});

```

### (c)

![2c](images/Capture1.PNG)

### (d)

![2d](images/Capture2.PNG)

## Question 3

### (a)

![3a](images/Capture3.PNG)

### (b)

![3b](images/Capture4.PNG)

### (c)

![3c](images/Capture5.PNG)

![3c](images/Capture6.PNG)
