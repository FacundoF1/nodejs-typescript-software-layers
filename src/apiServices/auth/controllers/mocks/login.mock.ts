import nock from 'nock';

nock('http://localhost:3000/users/facundo@gmail.com')
    .get('')
    .reply(200, {"username":"facundo","password":"123456","email":"facundo@gmail.com","_id":"vBONvkkMUTyzrv0a"});