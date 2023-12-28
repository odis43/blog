import os
from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
from flask_cors import CORS


load_dotenv()
app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
CORS(app)
username = os.getenv('DB_USERNAME')
password = os.getenv('DB_PASSWORD')
dbname = os.getenv('DB_NAME')
app.config["SQLALCHEMY_DATABASE_URI"] = f"postgresql://{username}:{password}@localhost:5432/{dbname}"
db = SQLAlchemy(app)
class Album(db.Model):
    __tablename__ = 'albums'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    artist = db.Column(db.String(100), nullable=False)
    path = db.Column(db.String(255), nullable=False)
    review = db.Column(db.Text)
    first = db.Column(db.Text)
    second = db.Column(db.Text)

class Film(db.Model):
    __tablename__ = 'films'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    director = db.Column(db.String(100), nullable=False)
    path = db.Column(db.String(255), nullable=False)
    review = db.Column(db.Text)
    first = db.Column(db.Text)
    second = db.Column(db.Text)
    
@app.route('/albums', methods=['GET'])
def get_albums():
    albums = Album.query.all()
    albums_list = [{"title": album.title, "artist": album.artist, "path": album.path, "review": album.review, "first": album.first, "second":album.second} for album in albums]
    print(albums_list)
    return jsonify(albums_list)

@app.route('/films', methods=['GET'])
def get_films():
    films = Film.query.all()
    films_list = [
        {
            "title": film.title,
            "director": film.director,
            "path": film.path,
            "review": film.review,
            "first": film.first,
            "second": film.second
        } for film in films
    ]
    print(films_list)
    return jsonify(films_list)



if __name__ == '__main__':
   app.run(debug=True)