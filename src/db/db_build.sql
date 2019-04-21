BEGIN;

DROP TABLE IF EXISTS users, walks CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  email VARCHAR(40) NOT NULL UNIQUE
);

CREATE TABLE walks (
  id SERIAL PRIMARY KEY,
  location VARCHAR(100) NOT NULL,
  difficulty VARCHAR(100),
  notes VARCHAR(1000),
  user_id INTEGER REFERENCES users(id)
);

INSERT INTO users ( username, password, email) VALUES
('Charlie', 'ilovefootball', 'charlie@gmail.com'),
('Jane', 'squeak', 'janedoe@gmail.com');

INSERT INTO walks (location, difficulty, notes, user_id) VALUES
('Walthamstow Marshes', 'Medium', 'We walked through Springfield Park, across the River Lea, and around the Walthamstow Marshes in the sunshine.', 2),
('Clissold Park', 'Easy', '420 my dudes', 1);

COMMIT;
