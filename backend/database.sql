CREATE TABLE students(
 id BIGSERIAL PRIMARY KEY NOT NULL UNIQUE,
 name VARCHAR(100) NOT NULL,
 gender VARCHAR(10) NOT NULL,
 year VARCHAR(5) NOT NULL,
 block VARCHAR(50) NOT NULL,
 branch VARCHAR(50) NOT NULL,
 room_no VARCHAR(50) NOT NULL,
 reg_no BIGINT NOT NULL,
 email VARCHAR(100) NOT NULL,
 password VARCHAR(100) NOT NULL
);
CREATE TABLE rectors(
 id BIGSERIAL PRIMARY KEY NOT NULL UNIQUE,
 name VARCHAR(100) NOT NULL,
 gender VARCHAR(10) NOT NULL,
 block VARCHAR(50) NOT NULL,
 email VARCHAR(100) NOT NULL,
 password VARCHAR(100) NOT NULL
);
CREATE TABLE hostel_complaints(
  complaint_id BIGSERIAL PRIMARY KEY NOT NULL UNIQUE,
  topic VARCHAR(50) NOT NULL,
  room_details VARCHAR(100) NOT NULL,
  complaint_type VARCHAR(50) NOT NULL,
  image BYTEA,
  complaint TEXT NOT NULL,
  student_id FOREIGN KEY REFERENCES students(id) NOT NULL,
  created_on DATE NOT NULL,
  is_completed VARCHAR(10) DEFAULT 'no' NOT NULL,
  completed_on TIMESTAMP 
);
CREATE TABLE mess_complaints(
  complaint_id BIGSERIAL PRIMARY KEY NOT NULL UNIQUE,
  topic VARCHAR(50) NOT NULL,
  complaint_type VARCHAR(50) NOT NULL,
  image BYTEA,
  complaint TEXT NOT NULL,
  student_id FOREIGN KEY REFERENCES students(id) NOT NULL,
  created_on DATE NOT NULL,
  is_completed VARCHAR(10) DEFAULT 'no' NOT NULL,
  completed_on TIMESTAMP 
);