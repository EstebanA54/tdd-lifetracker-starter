CREATE TABLE users
    (
      id      SERIAL PRIMARY KEY,
    username  TEXT NOT NULL,
    password TEXT NOT NULL,
    email   TEXT NOT NULL UNIQUE CHECK(POSITION('@' IN email) > 1),
    first_name  TEXT NOT NULL,
    last_name   TEXT NOT NULL,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL
    )
;


CREATE TABLE nutrition
   (
     id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  category    TEXT,
  calories    INTEGER,
  image_url   TEXT,
  user_id     INTEGER REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
  )
;