from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Replace this with your actual user database or authentication logic
users = {
    "user1": "password1",
    "user2": "password2",
    "admin": "BME_Department",
}

@app.route("/")
def login_page():
    return render_template("IntroPage.html")

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    loginID = data.get("loginID")
    loginPassword = data.get("loginPassword")

    # Check if username exists and the password matches
    if loginID in users and users[loginID] == loginPassword:
        return "", 200  # Successful login
    else:
        return "", 401  # Unauthorized

@app.route("/welcome")
def welcome():
    return render_template("AdminPage.html")

if __name__ == "__main__":
    app.run(debug=True)