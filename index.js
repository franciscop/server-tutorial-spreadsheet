// Load the dependencies
const server = require('server');
const { get } = server.router;
const { render } = server.reply;

// The URL fragment between "spreadsheets/d/" and "/edit"
const id = '1FeG6UsUC_BKlJBiy3j_c4uctMcQlnmv9iyfkDjuWXpg';
const drive = require('drive-db')(id);

// Load the userlist (if cache is expired) and render the index
const homeRoute = get('/', async () => {
  const db = await drive.load();
  console.log(db.find());
  return render('index.hbs', { users: db.find() });
});

// Launch the server in port 3000
server(3000, homeRoute);
