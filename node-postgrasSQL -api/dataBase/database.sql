create TABLE review(
  id SERIAL PRIMARY KEY,
  nickname VARCHAR(255) NOT NULL,
  text1 VARCHAR(255) NOT NULL,
  text2 VARCHAR(255) NOT NULL,
  text3 VARCHAR(255) NOT NULL,
  summary VARCHAR(255) NOT NULL
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
);

create TABLE post (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content VARCHAR(255) NOT NULL,
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES review (id)
);

create TABLE person(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  surname VARCHAR(255)
)