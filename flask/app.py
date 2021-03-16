import sqlalchemy
import os
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

app = Flask(__name__)

from flask_sqlalchemy import SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '') or "sqlite:///Tornado_data.sqlite"

# Remove tracking modifications
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


engine = create_engine("sqlite:///Tornado_data.sqlite")

Base = automap_base()

Base.prepare(engine, reflect=True)

Tornadoes = Base.classes.tornadoes



# index route, return index template
@app.route("/")
def index():
    
    return render_template("index.html")


# location route
@app.route("/locations")
def locations():
    
    session = Session(engine)
   
    results = session.query(Tornadoes.BEGIN_DATE, Tornadoes.BEGIN_LOCATION, Tornadoes.END_LOCATION, Tornadoes.STATE_ABBR).all()
    
    session.close()
    
    locations = []
    for row in results:
        location_dict = {}
        location_dict["Date"] = row.BEGIN_DATE 
        location_dict["Begin Location"] = row.BEGIN_LOCATION
        location_dict["End Location"] = row.END_LOCATION   
        location_dict["State"] = row.STATE_ABBR
        locations.append(location_dict)

    return jsonify(locations)


# damages route
@app.route("/damages")
def damages():
    
    session = Session(engine)
   
    results = session.query(Tornadoes.TOR_F_SCALE, Tornadoes.TOR_LENGTH, Tornadoes.TOR_WIDTH, Tornadoes.DEATHS_DIRECT, Tornadoes.INJURIES_DIRECT, Tornadoes.DAMAGE_PROPERTY_NUM, Tornadoes.DAMAGE_CROPS_NUM).all()
    
    session.close()
    
    damages = []
    for row in results:
        damages_dict = {}
        damages_dict["EF Scale"] = row.TOR_F_SCALE
        damages_dict["Tornado Length (Miles)"] = row.TOR_LENGTH
        damages_dict["Tornado Width (Feet)"] = row.TOR_WIDTH
        damages_dict["Direct Deaths"] = row.DEATHS_DIRECT   
        damages_dict["Direct Injuries"] = row.INJURIES_DIRECT 
        damages_dict["Properties Damaged ($)"] = row.DAMAGE_PROPERTY_NUM
        damages_dict["Crops Damaged ($)"] = row.DAMAGE_CROPS_NUM
        damages.append(damages_dict)

    return jsonify(damages)

# plot route, return plotly template
@app.route("/plot")
def plot():
    
    return render_template("plotly.html")


# map route, return newLeaflet template
@app.route("/map")
def map():
    
    return render_template("newLeaflet.html")

    
if __name__ == "__main__":
    app.run(debug=True)
